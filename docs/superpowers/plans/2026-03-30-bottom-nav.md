# Bottom Navigation (Mobile & Tablet) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add a MUI BottomNavigation bar fixed to the bottom of the screen on mobile/tablet (below `md`), replace the hamburger/drawer for those viewports, and move the theme switcher to the AppBar top-right so it's always accessible.

**Architecture:** A new `BottomNav` component renders a fixed MUI `BottomNavigation` below `md`. `IntersectionObserver` tracks the active section as the user scrolls. `Navbar.tsx` gets two targeted changes: hamburger hidden, `ThemeSwitcher` moved out of the desktop-only box. `index.tsx` adds `<BottomNav />` and bottom padding on mobile.

**Tech Stack:** Next.js 16, React 19, MUI v7, TypeScript, pnpm

---

## File Map

| Action | Path | Responsibility |
|--------|------|----------------|
| Create | `src/components/BottomNav/BottomNav.tsx` | Fixed bottom nav, intersection observer, nav items |
| Create | `src/components/BottomNav/index.ts` | Re-export |
| Modify | `src/components/Navbar/Navbar.tsx` | Hide hamburger, expose ThemeSwitcher on all breakpoints |
| Modify | `src/pages/index.tsx` | Mount `<BottomNav />`, add mobile bottom padding |

---

## Task 1: Create the BottomNav component

**Files:**
- Create: `src/components/BottomNav/BottomNav.tsx`
- Create: `src/components/BottomNav/index.ts`

- [ ] **Step 1: Create `src/components/BottomNav/BottomNav.tsx`**

```tsx
'use client';

import { JSX, SyntheticEvent, useEffect, useState } from 'react';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GridViewIcon from '@mui/icons-material/GridView';
import InfoIcon from '@mui/icons-material/Info';
import LayersIcon from '@mui/icons-material/Layers';
import PhoneIcon from '@mui/icons-material/Phone';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import { SectionPageIds } from '@/enums';
import { scrollToSection } from '@/utils';

const NAV_ITEMS = [
  { label: 'Home', id: SectionPageIds.MAIN_PAGE, icon: <GridViewIcon /> },
  { label: 'About', id: SectionPageIds.ABOUT, icon: <InfoIcon /> },
  { label: 'Projects', id: SectionPageIds.PROJECTS, icon: <LayersIcon /> },
  { label: 'Reviews', id: SectionPageIds.TESTIMONIALS, icon: <FormatQuoteIcon /> },
  { label: 'Contact', id: SectionPageIds.FOOTER, icon: <PhoneIcon /> },
];

export default function BottomNav(): JSX.Element {
  const [activeId, setActiveId] = useState<string>(SectionPageIds.MAIN_PAGE);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleChange = (_: SyntheticEvent, newValue: string): void => {
    setActiveId(newValue);
    scrollToSection(newValue);
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        display: { xs: 'block', md: 'none' },
      }}
      elevation={8}>
      <BottomNavigation
        value={activeId}
        onChange={handleChange}
        sx={{ bgcolor: 'nav.bg' }}>
        {NAV_ITEMS.map(({ label, id, icon }) => (
          <BottomNavigationAction
            key={id}
            label={label}
            value={id}
            icon={icon}
            sx={{
              color: 'nav.text',
              minWidth: 0,
              '&.Mui-selected': { color: 'primary.main' },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
```

- [ ] **Step 2: Create `src/components/BottomNav/index.ts`**

```ts
export { default } from './BottomNav';
```

- [ ] **Step 3: Type-check**

Run: `pnpm tsc:check`
Expected: No errors for the new files. (Ignore any pre-existing errors unrelated to BottomNav.)

- [ ] **Step 4: Commit**

```bash
git add src/components/BottomNav/BottomNav.tsx src/components/BottomNav/index.ts
git commit -m "feat: add BottomNav component for mobile/tablet"
```

---

## Task 2: Update Navbar — hide hamburger, show ThemeSwitcher on all breakpoints

**Files:**
- Modify: `src/components/Navbar/Navbar.tsx`

The current right-side AppBar structure is:
```tsx
{/* Desktop nav — lines 99–121 */}
<Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
  {NAV_LINKS.map(...)}
  <ThemeSwitcher />        {/* currently inside desktop-only Box */}
</Box>

{/* Mobile hamburger — lines 123–129 */}
<IconButton
  ...
  sx={{ display: { xs: 'flex', md: 'none' }, color: 'nav.text' }}>
  <MenuIcon />
</IconButton>
```

- [ ] **Step 1: Move ThemeSwitcher out of the desktop-only Box and hide the hamburger**

Replace the entire block from `{/* Desktop nav */}` through the closing `</IconButton>` of the hamburger (lines 98–130 in `Navbar.tsx`) with:

```tsx
          {/* Desktop nav links — md and above */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {NAV_LINKS.map(link => (
              <Button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                sx={{
                  color: 'nav.text',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  px: 1.5,
                  borderRadius: 2,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  },
                }}>
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Theme switcher — always visible */}
          <ThemeSwitcher />
```

The `MenuIcon` import and the hamburger `IconButton` are no longer rendered. Leave `MenuIcon` import and `drawerOpen`/`setDrawerOpen` state in place — the Drawer remains in the file and is harmless when unreachable.

- [ ] **Step 2: Type-check**

Run: `pnpm tsc:check`
Expected: No new errors.

- [ ] **Step 3: Lint check**

Run: `pnpm lint`
Expected: No new errors. (If `MenuIcon` import triggers an unused-imports warning, remove that import only.)

- [ ] **Step 4: Commit**

```bash
git add src/components/Navbar/Navbar.tsx
git commit -m "feat: hide mobile hamburger, expose ThemeSwitcher on all breakpoints"
```

---

## Task 3: Mount BottomNav in page and add mobile bottom padding

**Files:**
- Modify: `src/pages/index.tsx`

- [ ] **Step 1: Import BottomNav and add it + bottom padding to the page**

Replace the current content of `src/pages/index.tsx` with:

```tsx
import { JSX } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Box } from '@mui/material';

import BottomNav from '@/components/BottomNav';
import Navbar from '@/components/Navbar';
import ScrollToTopFab from '@/components/ScrollToTopFab';
import WelcomeScreen from '@/components/WelcomeScreen';

const About = dynamic(() => import('@/components/About'));
const Projects = dynamic(() => import('@/components/Projects'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer'));
const FadeInOnScroll = dynamic(() => import('@/components/FadeInOnScroll'));

export default function MyApp(): JSX.Element {
  return (
    <>
      <Head>
        <title>Deejay Geroso</title>
      </Head>

      <Navbar />
      <BottomNav />

      {/* Hero sits behind the fixed navbar — no offset needed as it's full-viewport */}
      <WelcomeScreen />

      {/* Sections below hero each get scroll-margin-top so the navbar doesn't cover the heading */}
      <Box
        sx={{
          '& > section': { scrollMarginTop: '64px' },
          pb: { xs: '56px', md: 0 },
        }}>
        <FadeInOnScroll>
          <About />
        </FadeInOnScroll>

        <Projects />

        <FadeInOnScroll>
          <Testimonials />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <Footer />
        </FadeInOnScroll>
      </Box>

      <ScrollToTopFab />
    </>
  );
}
```

The `pb: { xs: '56px', md: 0 }` prevents the fixed 56px bottom nav from overlapping the Footer on mobile.

- [ ] **Step 2: Type-check**

Run: `pnpm tsc:check`
Expected: No errors.

- [ ] **Step 3: Build**

Run: `pnpm build`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Manual smoke test**

Run: `pnpm dev`

Check at viewport < 900px (browser DevTools → responsive mode):
- Bottom nav is visible with 5 items: Home · About · Projects · Reviews · Contact
- Hamburger icon is gone from the AppBar
- Palette icon (ThemeSwitcher) is visible in the AppBar top-right
- Tapping a nav item scrolls to the correct section
- Active item highlights as you scroll through sections
- Footer is not hidden behind the bottom nav

Check at viewport ≥ 900px:
- Bottom nav is not visible
- Desktop nav links are present in the AppBar
- Palette icon is visible in the AppBar

- [ ] **Step 5: Commit**

```bash
git add src/pages/index.tsx
git commit -m "feat: mount BottomNav on mobile, add bottom padding"
```
