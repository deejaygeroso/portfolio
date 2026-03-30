# E2E Testing Design — Playwright

**Date:** 2026-03-30
**Status:** Approved

---

## Overview

Add Playwright E2E tests to the portfolio app to catch bugs early on feature branches and confirm successful production deployments on `https://deejaygeroso.com`.

---

## Architecture

### Approach

Single test suite in `e2e/tests/`, two Playwright config files — one for feature branch (local dev server) and one for production (live URL). Tests are written once and run in both environments.

### File Structure

```
e2e/
  tests/
    navigation.spec.ts
    welcome-screen.spec.ts
    about.spec.ts
    projects.spec.ts
    testimonials.spec.ts
    footer.spec.ts
    theme.spec.ts
    scroll-to-top.spec.ts
  playwright.config.ts        # Feature branch: webServer + localhost:3000
  playwright.config.prod.ts   # Main branch: baseURL https://deejaygeroso.com
```

---

## Test Cases

| File | What it tests |
|------|--------------|
| `navigation.spec.ts` | Navbar links visible; clicking each scrolls to the correct section (`#about`, `#projects`, `#testimonials`); BottomNav visible on mobile viewport |
| `welcome-screen.spec.ts` | Hero text renders; "View My Work" button is visible and scrolls to the projects section |
| `about.spec.ts` | About section is visible with expected heading content |
| `projects.spec.ts` | Project cards render; clicking a card opens `ProjectRoleModal`; modal closes on dismiss; `TeamMembersModal` opens and closes |
| `testimonials.spec.ts` | Testimonials section is visible; Swiper renders at least one testimonial card |
| `footer.spec.ts` | Footer is visible; social media links are present |
| `theme.spec.ts` | ThemeSwitcher toggles between light/dark; `data-theme` attribute or class changes on `<html>` |
| `scroll-to-top.spec.ts` | ScrollToTopFab is hidden at page top; appears after scrolling down; clicking it scrolls back to top |

---

## Playwright Config

### `e2e/playwright.config.ts` (feature branch)

- `baseURL`: `http://localhost:3000`
- `webServer`: runs `pnpm dev`, waits for `http://localhost:3000`
- Browser: Chromium only
- Retries: 1 (local flakiness tolerance)

### `e2e/playwright.config.prod.ts` (main branch / prod)

- `baseURL`: `https://deejaygeroso.com`
- No `webServer` (hits live URL directly)
- Browser: Chromium only
- Retries: 2 (network flakiness tolerance)

---

## CI/CD Integration

### Feature Branch Pipeline (`feature.yml`)

A new `e2e` job is added that runs after `quality-check` passes.

```yaml
e2e:
  needs: quality-check
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Setup and Install Dependencies
      uses: ./.github/actions/setup
      with:
        node_version: '24.11.1'
        pnpm_version: '10.24.0'
    - name: Install Playwright Browsers
      run: pnpm exec playwright install --with-deps chromium
    - name: Run E2E Tests
      run: pnpm exec playwright test --config=e2e/playwright.config.ts
```

### Production Pipeline (`prod.yml`)

A new `smoke-test` job is added after `release`. A 60-second wait allows Render to finish deploying before tests run.

```yaml
smoke-test:
  needs: release
  runs-on: ubuntu-latest
  steps:
    - uses: actions/checkout@v4
    - name: Setup and Install Dependencies
      uses: ./.github/actions/setup
      with:
        node_version: '24.11.1'
        pnpm_version: '10.24.0'
    - name: Wait for Render deploy
      run: sleep 60
    - name: Install Playwright Browsers
      run: pnpm exec playwright install --with-deps chromium
    - name: Run Smoke Tests (prod)
      run: pnpm exec playwright test --config=e2e/playwright.config.prod.ts
```

---

## Running Locally

```bash
# Feature branch (spins up dev server automatically)
pnpm exec playwright test --config=e2e/playwright.config.ts

# Against prod
pnpm exec playwright test --config=e2e/playwright.config.prod.ts

# With UI mode
pnpm exec playwright test --config=e2e/playwright.config.ts --ui
```

---

## Error Handling

- Playwright retries handle transient flakiness (1 retry local, 2 retries prod).
- Failed test runs upload an HTML report as a CI artifact for debugging.
- The 60-second Render wait is a pragmatic default; if Render consistently takes longer, this value should be increased.

---

## Out of Scope

- Unit or integration tests (not Playwright's domain).
- Firefox and Safari browsers (Chromium only by decision).
- Visual regression / screenshot diffing.
- Performance testing.
