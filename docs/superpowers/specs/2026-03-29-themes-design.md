# Multi-Theme Support — Design Spec

**Date:** 2026-03-29
**Status:** Approved

---

## Context

The portfolio currently ships with a single static light theme. All colors are hard-coded in `src/styles/theme.tsx` and scattered as raw hex values across components. This spec describes adding 7 switchable themes (1 existing light + 2 dark + 4 light variants) with persistent user preference and a Navbar-integrated switcher.

---

## Themes

| Name | Key | Background | Primary Accent | Type |
|---|---|---|---|---|
| Light (current) | `light` | `#f5f5f5` | `#1b75d2` | Light |
| Dark Ocean | `dark-ocean` | `#0d1117` | `#1b75d2` / `#58a6ff` | Dark |
| Dark Slate | `dark-slate` | `#0f172a` | `#38bdf8` | Dark |
| Warm Cream | `warm-cream` | `#fdf6ec` | `#c2651a` | Light |
| Soft Rose | `soft-rose` | `#fdf2f4` | `#c0396b` | Light |
| Arctic Mint | `arctic-mint` | `#f0fafb` | `#0e8a94` | Light |
| Lavender Mist | `lavender-mist` | `#f5f3ff` | `#6d28d9` | Light |

---

## Architecture

### File Structure

```
src/
  styles/
    themes/
      light.ts
      darkOcean.ts
      darkSlate.ts
      warmCream.ts
      softRose.ts
      arcticMint.ts
      lavenderMist.ts
    themeMap.ts         ← maps theme key string → MUI Theme object
    themeTypes.ts       ← MUI palette module augmentation (palette.nav)
  components/
    ThemeSwitcher/
      ThemeSwitcher.tsx
```

### Provider Chain (`src/pages/_app.tsx`)

```tsx
<NextThemesProvider
  themes={['light','dark-ocean','dark-slate','warm-cream','soft-rose','arctic-mint','lavender-mist']}
  defaultTheme="light"
  attribute="data-theme"
>
  <MuiThemeWrapper>
    <CssBaseline />
    <Component {...pageProps} />
  </MuiThemeWrapper>
</NextThemesProvider>
```

`MuiThemeWrapper` is a separate client component that calls `useTheme()` from `next-themes`, resolves the active theme via `themeMap`, and passes it to MUI's `ThemeProvider`. It must be split out because hooks cannot be called at the same level as the providers wrapping them.

### Theme Map (`src/styles/themeMap.ts`)

```ts
import { Theme } from '@mui/material/styles';
import lightTheme from './themes/light';
import darkOceanTheme from './themes/darkOcean';
// ... etc

export const themeMap: Record<string, Theme> = {
  'light': lightTheme,
  'dark-ocean': darkOceanTheme,
  // ...
};
```

---

## Custom Palette Token

A `palette.nav` extension is added to every theme to replace hard-coded Navbar/Drawer hex values:

```ts
// src/styles/themeTypes.ts
declare module '@mui/material/styles' {
  interface Palette {
    nav: {
      bg: string;         // AppBar scrolled background
      text: string;       // Nav link + icon color
      drawerBg: string;   // Mobile drawer background
    };
  }
  interface PaletteOptions {
    nav?: {
      bg?: string;
      text?: string;
      drawerBg?: string;
    };
  }
}
```

Each theme file defines `palette.nav` values appropriate to its color scheme.

---

## Theme Switcher UI

**Component:** `src/components/ThemeSwitcher/ThemeSwitcher.tsx`

**Placement:** Right end of the desktop Navbar toolbar, after the nav links. Visible on desktop only (hidden on mobile — mobile drawer will get its own swatch row).

**Behavior:**
- Renders a MUI `IconButton` with a palette icon (e.g. `PaletteOutlined`)
- On click, opens a MUI `Popover` anchored to the button
- Popover contains a 4-column grid of 7 swatch circles
- Each swatch is a `Tooltip` showing the theme name on hover
- Active theme swatch shows a ring/checkmark indicator
- Clicking a swatch calls `setTheme(key)` from `next-themes` and closes the popover

---

## Hard-Coded Color Migration

The following components use raw hex values that must be replaced with theme tokens:

| File | Hard-coded values | Replace with |
|---|---|---|
| `src/components/Navbar/Navbar.tsx` | `#ffffff`, `#171a1c` | `palette.nav.text`, `palette.nav.bg`, `palette.nav.drawerBg` |
| `src/components/Footer/Footer.tsx` | `#181b1e`, `#e31b6d` | `palette.background.paper`, `palette.primary.main` |
| `src/components/WelcomeScreen/WelcomeScreen.tsx` | `#171a1c` (overlay) | `palette.background.default` with opacity |
| `src/components/ViewMyWorkButton/styles.css` | inline hex values | Migrate to `sx` prop using theme tokens |

---

## Dependencies

- **Add:** `next-themes` (npm/pnpm)
- **No other new dependencies.** MUI v7 + Emotion already handle dynamic theming.

---

## Verification

1. `pnpm dev` — visit the portfolio, click the palette icon in the Navbar, switch through all 7 themes and confirm colors update correctly across all sections
2. Reload the page — confirm the selected theme persists (localStorage via `next-themes`)
3. Confirm no flash-of-incorrect-theme on load for dark themes
4. Resize to mobile — confirm the hamburger menu still works and drawer colors respect the active theme
5. `pnpm build` — confirm static export builds without errors
