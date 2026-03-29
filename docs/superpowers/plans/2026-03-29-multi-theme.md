# Multi-Theme Support Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Add 7 switchable themes (light, dark-ocean, dark-slate, warm-cream, soft-rose, arctic-mint, lavender-mist) with persistent user preference and a Navbar palette-icon popover switcher.

**Architecture:** `next-themes` manages theme state via `localStorage` and writes `data-theme` to `<html>` to prevent flash. Each theme is a MUI `createTheme()` object in `src/styles/themes/`. A `MuiThemeWrapper` client component reads the active theme name, looks it up in `themeMap`, and passes it to MUI's `ThemeProvider`. Hard-coded hex values in components are migrated to custom `palette.nav` and `palette.welcome` tokens.

**Tech Stack:** Next.js 16.2 (Pages Router), React 19, TypeScript 5.9, MUI v7, Emotion, next-themes, pnpm

---

## File Map

**New files:**
- `src/styles/themeTypes.ts` — MUI palette module augmentation
- `src/styles/themes/light.ts` — current light palette
- `src/styles/themes/darkOcean.ts`
- `src/styles/themes/darkSlate.ts`
- `src/styles/themes/warmCream.ts`
- `src/styles/themes/softRose.ts`
- `src/styles/themes/arcticMint.ts`
- `src/styles/themes/lavenderMist.ts`
- `src/styles/themeMap.ts` — theme key → MUI Theme object
- `src/components/ThemeSwitcher/ThemeSwitcher.tsx`

**Modified files:**
- `src/pages/_app.tsx` — NextThemesProvider + MuiThemeWrapper + swiper CSS
- `src/pages/_document.tsx` — remove hard-coded body `backgroundColor`
- `src/components/Navbar/Navbar.tsx` — integrate ThemeSwitcher, migrate palette.nav tokens
- `src/components/Footer/Footer.tsx` — migrate palette.nav tokens
- `src/components/WelcomeScreen/WelcomeScreen.tsx` — migrate palette.welcome tokens
- `src/components/ViewMyWorkButton/ViewMyWorkButton.tsx` — migrate palette.welcome tokens

**Deleted files:**
- `src/styles/theme.tsx` — replaced by individual theme files
- `src/components/ViewMyWorkButton/styles.css` — orphaned, unused

---

## Task 1: Install next-themes and create palette type augmentation

**Files:**
- Create: `src/styles/themeTypes.ts`

- [ ] **Step 1: Install next-themes**

```bash
pnpm add next-themes
```

Expected output: `dependencies: + next-themes x.x.x`

- [ ] **Step 2: Create `src/styles/themeTypes.ts`**

```typescript
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    nav: {
      bg: string;
      text: string;
      drawerBg: string;
    };
    welcome: {
      overlayBg: string;
      titleColor: string;
      accentColor: string;
      buttonBg: string;
      buttonHoverBg: string;
    };
  }
  interface PaletteOptions {
    nav?: {
      bg?: string;
      text?: string;
      drawerBg?: string;
    };
    welcome?: {
      overlayBg?: string;
      titleColor?: string;
      accentColor?: string;
      buttonBg?: string;
      buttonHoverBg?: string;
    };
  }
}
```

- [ ] **Step 3: Verify TypeScript compiles**

```bash
pnpm tsc:check
```

Expected: no errors (themeTypes.ts is declaration-only, no imports yet)

- [ ] **Step 4: Commit**

```bash
git add src/styles/themeTypes.ts pnpm-lock.yaml package.json
git commit -m "feat: install next-themes and add palette type augmentation"
```

---

## Task 2: Create all 7 theme files

**Files:**
- Create: `src/styles/themes/light.ts`
- Create: `src/styles/themes/darkOcean.ts`
- Create: `src/styles/themes/darkSlate.ts`
- Create: `src/styles/themes/warmCream.ts`
- Create: `src/styles/themes/softRose.ts`
- Create: `src/styles/themes/arcticMint.ts`
- Create: `src/styles/themes/lavenderMist.ts`

- [ ] **Step 1: Create `src/styles/themes/light.ts`**

```typescript
import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1b75d2', contrastText: '#ffffff' },
    secondary: { main: '#d2f5ff', contrastText: '#171a1c' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#171a1c', secondary: '#64748B' },
    nav: {
      bg: 'rgba(23,26,28,0.96)',
      text: '#ffffff',
      drawerBg: '#171a1c',
    },
    welcome: {
      overlayBg: 'rgba(23,26,28,0.95)',
      titleColor: '#d2f5ff',
      accentColor: '#e31b6d',
      buttonBg: '#181b1e',
      buttonHoverBg: '#1f2326',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default lightTheme;
```

- [ ] **Step 2: Create `src/styles/themes/darkOcean.ts`**

```typescript
import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const darkOceanTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#58a6ff', contrastText: '#0d1117' },
    secondary: { main: '#1b75d2', contrastText: '#ffffff' },
    background: { default: '#0d1117', paper: '#161b22' },
    text: { primary: '#c9d1d9', secondary: '#8b949e' },
    nav: {
      bg: 'rgba(13,17,23,0.96)',
      text: '#c9d1d9',
      drawerBg: '#161b22',
    },
    welcome: {
      overlayBg: 'rgba(13,17,23,0.92)',
      titleColor: '#c9d1d9',
      accentColor: '#58a6ff',
      buttonBg: '#161b22',
      buttonHoverBg: '#1c2128',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default darkOceanTheme;
```

- [ ] **Step 3: Create `src/styles/themes/darkSlate.ts`**

```typescript
import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const darkSlateTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#38bdf8', contrastText: '#0f172a' },
    secondary: { main: '#1e293b', contrastText: '#e2e8f0' },
    background: { default: '#0f172a', paper: '#1e293b' },
    text: { primary: '#e2e8f0', secondary: '#94a3b8' },
    nav: {
      bg: 'rgba(15,23,42,0.96)',
      text: '#e2e8f0',
      drawerBg: '#1e293b',
    },
    welcome: {
      overlayBg: 'rgba(15,23,42,0.92)',
      titleColor: '#e2e8f0',
      accentColor: '#38bdf8',
      buttonBg: '#1e293b',
      buttonHoverBg: '#263348',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default darkSlateTheme;
```

- [ ] **Step 4: Create `src/styles/themes/warmCream.ts`**

```typescript
import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const warmCreamTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#c2651a', contrastText: '#ffffff' },
    secondary: { main: '#f5dcc8', contrastText: '#2d2013' },
    background: { default: '#fdf6ec', paper: '#ffffff' },
    text: { primary: '#2d2013', secondary: '#8a6a4a' },
    nav: {
      bg: 'rgba(45,32,19,0.96)',
      text: '#ffffff',
      drawerBg: '#2d2013',
    },
    welcome: {
      overlayBg: 'rgba(45,32,19,0.93)',
      titleColor: '#fdf6ec',
      accentColor: '#e8a87c',
      buttonBg: '#2d2013',
      buttonHoverBg: '#3d2d18',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default warmCreamTheme;
```

- [ ] **Step 5: Create `src/styles/themes/softRose.ts`**

```typescript
import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const softRoseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#c0396b', contrastText: '#ffffff' },
    secondary: { main: '#fce4ec', contrastText: '#1a0a0f' },
    background: { default: '#fdf2f4', paper: '#ffffff' },
    text: { primary: '#1a0a0f', secondary: '#8a4060' },
    nav: {
      bg: 'rgba(26,10,15,0.96)',
      text: '#ffffff',
      drawerBg: '#1a0a0f',
    },
    welcome: {
      overlayBg: 'rgba(26,10,15,0.93)',
      titleColor: '#fdf2f4',
      accentColor: '#f08fac',
      buttonBg: '#1a0a0f',
      buttonHoverBg: '#2a1520',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default softRoseTheme;
```

- [ ] **Step 6: Create `src/styles/themes/arcticMint.ts`**

```typescript
import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const arcticMintTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0e8a94', contrastText: '#ffffff' },
    secondary: { main: '#b8e8ed', contrastText: '#0a2025' },
    background: { default: '#f0fafb', paper: '#ffffff' },
    text: { primary: '#0a2025', secondary: '#4a8a90' },
    nav: {
      bg: 'rgba(10,32,37,0.96)',
      text: '#ffffff',
      drawerBg: '#0a2025',
    },
    welcome: {
      overlayBg: 'rgba(10,32,37,0.93)',
      titleColor: '#f0fafb',
      accentColor: '#5ecdd6',
      buttonBg: '#0a2025',
      buttonHoverBg: '#0f2d33',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default arcticMintTheme;
```

- [ ] **Step 7: Create `src/styles/themes/lavenderMist.ts`**

```typescript
import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const lavenderMistTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6d28d9', contrastText: '#ffffff' },
    secondary: { main: '#ede9fe', contrastText: '#1e1030' },
    background: { default: '#f5f3ff', paper: '#ffffff' },
    text: { primary: '#1e1030', secondary: '#6d5a8a' },
    nav: {
      bg: 'rgba(30,16,48,0.96)',
      text: '#ffffff',
      drawerBg: '#1e1030',
    },
    welcome: {
      overlayBg: 'rgba(30,16,48,0.93)',
      titleColor: '#f5f3ff',
      accentColor: '#a78bfa',
      buttonBg: '#1e1030',
      buttonHoverBg: '#2a1840',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default lavenderMistTheme;
```

- [ ] **Step 8: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 9: Commit**

```bash
git add src/styles/themes/
git commit -m "feat: add 7 MUI theme definitions"
```

---

## Task 3: Create themeMap and delete old theme.tsx

**Files:**
- Create: `src/styles/themeMap.ts`
- Delete: `src/styles/theme.tsx`

- [ ] **Step 1: Create `src/styles/themeMap.ts`**

```typescript
import { Theme } from '@mui/material/styles';

import arcticMintTheme from './themes/arcticMint';
import darkOceanTheme from './themes/darkOcean';
import darkSlateTheme from './themes/darkSlate';
import lavenderMistTheme from './themes/lavenderMist';
import lightTheme from './themes/light';
import softRoseTheme from './themes/softRose';
import warmCreamTheme from './themes/warmCream';

export const THEME_KEYS = [
  'light',
  'dark-ocean',
  'dark-slate',
  'warm-cream',
  'soft-rose',
  'arctic-mint',
  'lavender-mist',
] as const;

export type ThemeKey = (typeof THEME_KEYS)[number];

export const themeMap: Record<ThemeKey, Theme> = {
  'light': lightTheme,
  'dark-ocean': darkOceanTheme,
  'dark-slate': darkSlateTheme,
  'warm-cream': warmCreamTheme,
  'soft-rose': softRoseTheme,
  'arctic-mint': arcticMintTheme,
  'lavender-mist': lavenderMistTheme,
};

export const themeLabels: Record<ThemeKey, string> = {
  'light': 'Light',
  'dark-ocean': 'Dark Ocean',
  'dark-slate': 'Dark Slate',
  'warm-cream': 'Warm Cream',
  'soft-rose': 'Soft Rose',
  'arctic-mint': 'Arctic Mint',
  'lavender-mist': 'Lavender Mist',
};

export const themeSwatchColors: Record<ThemeKey, { bg: string; border: string }> = {
  'light': { bg: '#f5f5f5', border: '#1b75d2' },
  'dark-ocean': { bg: '#0d1117', border: '#58a6ff' },
  'dark-slate': { bg: '#0f172a', border: '#38bdf8' },
  'warm-cream': { bg: '#fdf6ec', border: '#c2651a' },
  'soft-rose': { bg: '#fdf2f4', border: '#c0396b' },
  'arctic-mint': { bg: '#f0fafb', border: '#0e8a94' },
  'lavender-mist': { bg: '#f5f3ff', border: '#6d28d9' },
};
```

- [ ] **Step 2: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors (themeMap.ts is self-contained; `theme.tsx` is deleted in Task 4 alongside the `_app.tsx` update that removes its import)

- [ ] **Step 3: Commit**

```bash
git add src/styles/themeMap.ts
git commit -m "feat: add themeMap with 7 theme keys, labels, and swatch colors"
```

---

## Task 4: Update `_app.tsx` with NextThemesProvider + MuiThemeWrapper

**Files:**
- Modify: `src/pages/_app.tsx`

- [ ] **Step 1: Replace `src/pages/_app.tsx` entirely**

```typescript
import { useMemo } from 'react';

import type { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';

import { THEME_KEYS, themeMap } from '@/styles/themeMap';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useNextTheme();

  const muiTheme = useMemo(() => {
    const key = THEME_KEYS.find(k => k === resolvedTheme) ?? 'light';
    return themeMap[key];
  }, [resolvedTheme]);

  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default function MyApp(props: Readonly<AppProps>) {
  const { Component, pageProps } = props;

  return (
    <NextThemesProvider
      themes={[...THEME_KEYS]}
      defaultTheme='light'
      attribute='data-theme'>
      <MuiThemeWrapper>
        <Component {...pageProps} />
      </MuiThemeWrapper>
    </NextThemesProvider>
  );
}
```

- [ ] **Step 2: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 3: Run lint**

```bash
pnpm lint
```

Expected: no errors

- [ ] **Step 4: Start dev server and verify light theme loads**

```bash
pnpm dev
```

Open http://localhost:3000 — the portfolio should look identical to before (light theme). No visual regressions.

- [ ] **Step 5: Delete old `src/styles/theme.tsx`**

Now that `_app.tsx` no longer imports it, delete the old file:

```bash
git rm src/styles/theme.tsx
```

- [ ] **Step 6: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 7: Commit**

```bash
git add src/pages/_app.tsx
git commit -m "feat: wire NextThemesProvider and MuiThemeWrapper into app, remove old theme.tsx"
```

---

## Task 5: Migrate Footer.tsx to theme tokens

**Files:**
- Modify: `src/components/Footer/Footer.tsx`

- [ ] **Step 1: Replace hard-coded colors in `src/components/Footer/Footer.tsx`**

Change the `<Box component='footer'>` `sx` prop (lines ~40-50):

```typescript
// Before
sx={{
  bgcolor: '#181b1e',
  color: '#ffffff',
  ...
}}

// After
sx={{
  bgcolor: 'nav.drawerBg',
  color: 'nav.text',
  ...
}}
```

Change the `<IconButton>` `sx` prop (line ~86):

```typescript
// Before
sx={{
  color: '#ffffff',
  ...
}}

// After
sx={{
  color: 'nav.text',
  ...
}}
```

Full updated `<Box component='footer'>` block:

```typescript
<Box
  component='footer'
  id={SectionPageIds.FOOTER}
  sx={{
    bgcolor: 'nav.drawerBg',
    color: 'nav.text',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    py: 6,
  }}>
```

Full updated `<IconButton>` sx:

```typescript
sx={{
  color: 'nav.text',
  fontSize: { xs: 28, sm: 32, md: 36 },
  mx: 1,
  transition: 'transform 0.2s ease, color 0.2s ease',
  '&:hover': {
    color: 'primary.main',
    transform: 'scale(1.15)',
    background: 'transparent',
  },
}}
```

- [ ] **Step 2: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer/Footer.tsx
git commit -m "feat: migrate Footer hard-coded colors to theme tokens"
```

---

## Task 6: Migrate WelcomeScreen.tsx and ViewMyWorkButton.tsx to theme tokens

**Files:**
- Modify: `src/components/WelcomeScreen/WelcomeScreen.tsx`
- Modify: `src/components/ViewMyWorkButton/ViewMyWorkButton.tsx`
- Delete: `src/components/ViewMyWorkButton/styles.css`

- [ ] **Step 1: Update the overlay `<Box>` in `src/components/WelcomeScreen/WelcomeScreen.tsx`**

Replace the inner `<Box>` `sx` (the dark overlay, currently `background: '#171a1cf2'`):

```typescript
// Before
sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  background: '#171a1cf2',
  minHeight: '100vh',
}}

// After
sx={{
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  background: 'welcome.overlayBg',
  minHeight: '100vh',
}}
```

- [ ] **Step 2: Update Typography title colors in `src/components/WelcomeScreen/WelcomeScreen.tsx`**

Replace `#d2f5ff` and `#e31b6d` references:

```typescript
// title1 Typography — Before
sx={{
  typography: { xs: 'h5', sm: 'h4', md: 'h3' },
  color: '#d2f5ff',
  mt: 0,
  '& > #title1-author-name': {
    color: '#e31b6d',
  },
}}

// title1 Typography — After
sx={{
  typography: { xs: 'h5', sm: 'h4', md: 'h3' },
  color: 'welcome.titleColor',
  mt: 0,
  '& > #title1-author-name': {
    color: 'welcome.accentColor',
  },
}}

// title2 Typography — Before
sx={{
  typography: { xs: 'h5', sm: 'h4', md: 'h3' },
  color: '#d2f5ff',
  mt: 1,
}}

// title2 Typography — After
sx={{
  typography: { xs: 'h5', sm: 'h4', md: 'h3' },
  color: 'welcome.titleColor',
  mt: 1,
}}
```

- [ ] **Step 3: Update `src/components/ViewMyWorkButton/ViewMyWorkButton.tsx`**

Replace the `sx` prop on the `<Button>` component:

```typescript
// Before
sx={{
  textTransform: 'none',
  px: { xs: 2, sm: 3 },
  py: { xs: 1, sm: 1.2 },
  backgroundColor: '#181b1e',
  border: '2px solid #d2f5ff',
  color: '#d2f5ff',
  fontSize: { xs: '16px', sm: '18px', md: '22px' },
  fontWeight: 300,
  textDecoration: 'none',
  borderRadius: 3,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: '#1f2326',
    borderColor: '#e31b6d',
    color: '#e31b6d',
  },
  mt: 2,
}}

// After
sx={{
  textTransform: 'none',
  px: { xs: 2, sm: 3 },
  py: { xs: 1, sm: 1.2 },
  backgroundColor: 'welcome.buttonBg',
  border: '2px solid',
  borderColor: 'welcome.titleColor',
  color: 'welcome.titleColor',
  fontSize: { xs: '16px', sm: '18px', md: '22px' },
  fontWeight: 300,
  textDecoration: 'none',
  borderRadius: 3,
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: 'welcome.buttonHoverBg',
    borderColor: 'welcome.accentColor',
    color: 'welcome.accentColor',
  },
  mt: 2,
}}
```

- [ ] **Step 4: Delete the orphaned CSS file**

```bash
git rm src/components/ViewMyWorkButton/styles.css
```

- [ ] **Step 5: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 6: Commit**

```bash
git add src/components/WelcomeScreen/WelcomeScreen.tsx src/components/ViewMyWorkButton/ViewMyWorkButton.tsx src/components/ViewMyWorkButton/styles.css
git commit -m "feat: migrate WelcomeScreen and ViewMyWorkButton colors to theme tokens, remove orphaned styles.css"
```

---

## Task 7: Create ThemeSwitcher component

**Files:**
- Create: `src/components/ThemeSwitcher/ThemeSwitcher.tsx`

- [ ] **Step 1: Create `src/components/ThemeSwitcher/ThemeSwitcher.tsx`**

```typescript
'use client';

import { JSX, MouseEvent, useState } from 'react';

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import {
  Box,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme as useNextTheme } from 'next-themes';

import {
  THEME_KEYS,
  ThemeKey,
  themeLabels,
  themeSwatchColors,
} from '@/styles/themeMap';

export default function ThemeSwitcher(): JSX.Element {
  const { resolvedTheme, setTheme } = useNextTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleSelect = (key: ThemeKey): void => {
    setTheme(key);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title='Switch theme'>
        <IconButton
          onClick={handleOpen}
          aria-label='Switch theme'
          size='small'
          sx={{ color: 'nav.text', ml: 1 }}>
          <PaletteOutlinedIcon fontSize='small' />
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              p: 1.5,
              mt: 0.5,
            },
          },
        }}>
        <Typography
          variant='caption'
          sx={{
            display: 'block',
            mb: 1,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 1,
            px: 0.5,
          }}>
          Choose theme
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0.75,
          }}>
          {THEME_KEYS.map(key => {
            const swatch = themeSwatchColors[key];
            const isActive = resolvedTheme === key;
            return (
              <Tooltip key={key} title={themeLabels[key]} placement='top'>
                <Box
                  component='button'
                  onClick={() => handleSelect(key)}
                  aria-label={themeLabels[key]}
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: swatch.bg,
                    border: isActive ? `3px solid ${swatch.border}` : '2px solid',
                    borderColor: isActive ? swatch.border : 'divider',
                    cursor: 'pointer',
                    outline: isActive ? `2px solid ${swatch.border}` : 'none',
                    outlineOffset: 1,
                    transition: 'transform 0.15s ease, outline 0.15s ease',
                    '&:hover': { transform: 'scale(1.15)' },
                    p: 0,
                  }}
                />
              </Tooltip>
            );
          })}
        </Box>
      </Popover>
    </>
  );
}
```

- [ ] **Step 2: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/components/ThemeSwitcher/ThemeSwitcher.tsx
git commit -m "feat: create ThemeSwitcher component with palette icon and popover"
```

---

## Task 8: Integrate ThemeSwitcher into Navbar and migrate Navbar colors

**Files:**
- Modify: `src/components/Navbar/Navbar.tsx`

- [ ] **Step 1: Add ThemeSwitcher import to Navbar**

Add to the import block at the top of `src/components/Navbar/Navbar.tsx`:

```typescript
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
```

- [ ] **Step 2: Update AppBar `bgcolor` and `backdropFilter` sx**

Replace the hard-coded `rgba(23, 26, 28, 0.96)` in the `<AppBar>` sx:

```typescript
// Before
sx={{
  bgcolor: scrolled ? 'rgba(23, 26, 28, 0.96)' : 'transparent',
  backdropFilter: scrolled ? 'blur(8px)' : 'none',
  transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
}}

// After
sx={{
  bgcolor: scrolled ? 'nav.bg' : 'transparent',
  backdropFilter: scrolled ? 'blur(8px)' : 'none',
  transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
}}
```

- [ ] **Step 3: Replace hard-coded `#ffffff` in Typography (logo name)**

```typescript
// Before
sx={{
  fontWeight: 500,
  color: '#ffffff',
  cursor: 'pointer',
  letterSpacing: 1,
  fontSize: { xs: '1rem', md: '1.1rem' },
}}

// After
sx={{
  fontWeight: 500,
  color: 'nav.text',
  cursor: 'pointer',
  letterSpacing: 1,
  fontSize: { xs: '1rem', md: '1.1rem' },
}}
```

- [ ] **Step 4: Replace hard-coded `#ffffff` in desktop nav Buttons**

```typescript
// Before
sx={{
  color: '#ffffff',
  textTransform: 'none',
  ...
}}

// After
sx={{
  color: 'nav.text',
  textTransform: 'none',
  ...
}}
```

- [ ] **Step 5: Replace hard-coded `#ffffff` in mobile hamburger IconButton**

```typescript
// Before
sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }}

// After
sx={{ display: { xs: 'flex', md: 'none' }, color: 'nav.text' }}
```

- [ ] **Step 6: Replace hard-coded `#171a1c` in Drawer PaperProps and close button**

```typescript
// PaperProps — Before
sx={{ width: 240, bgcolor: '#171a1c', color: '#ffffff' }}

// PaperProps — After
sx={{ width: 240, bgcolor: 'nav.drawerBg', color: 'nav.text' }}

// Close button IconButton — Before
sx={{ color: '#ffffff' }}

// Close button IconButton — After
sx={{ color: 'nav.text' }}

// ListItemText primary — Before
slotProps={{ primary: { sx: { color: '#ffffff', fontWeight: 400 } } }}

// ListItemText primary — After
slotProps={{ primary: { sx: { color: 'nav.text', fontWeight: 400 } } }}
```

- [ ] **Step 7: Add ThemeSwitcher to desktop nav (after the nav links box)**

In the desktop nav section, add `<ThemeSwitcher />` after the closing `</Box>` of the nav links and before the mobile hamburger `<IconButton>`:

```typescript
{/* Desktop nav */}
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
  <ThemeSwitcher />
</Box>
```

- [ ] **Step 8: Add theme swatches row to the mobile Drawer**

Inside the `<Drawer>`, add a swatch row at the bottom of the `<List>`:

```typescript
{/* Theme swatches in mobile drawer */}
<Box sx={{ px: 2, py: 1.5, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
  <Typography variant='caption' sx={{ color: 'nav.text', opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1 }}>
    Theme
  </Typography>
  <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 1 }}>
    {THEME_KEYS.map(key => {
      const swatch = themeSwatchColors[key];
      const isActive = resolvedTheme === key;
      return (
        <Tooltip key={key} title={themeLabels[key]} placement='top'>
          <Box
            component='button'
            onClick={() => { setTheme(key); setDrawerOpen(false); }}
            aria-label={themeLabels[key]}
            sx={{
              width: 24,
              height: 24,
              borderRadius: '50%',
              background: swatch.bg,
              border: isActive ? `3px solid ${swatch.border}` : '2px solid rgba(255,255,255,0.3)',
              outline: isActive ? `2px solid ${swatch.border}` : 'none',
              outlineOffset: 1,
              cursor: 'pointer',
              transition: 'transform 0.15s ease',
              '&:hover': { transform: 'scale(1.15)' },
              p: 0,
            }}
          />
        </Tooltip>
      );
    })}
  </Box>
</Box>
```

- [ ] **Step 9: Add required imports to Navbar.tsx for the drawer swatches**

Add to the top of Navbar.tsx:

```typescript
import { useTheme as useNextTheme } from 'next-themes';

import { THEME_KEYS, themeLabels, themeSwatchColors } from '@/styles/themeMap';
```

Add inside the `Navbar` component function:

```typescript
const { resolvedTheme, setTheme } = useNextTheme();
```

- [ ] **Step 10: Run TypeScript check and lint**

```bash
pnpm tsc:check && pnpm lint
```

Expected: no errors

- [ ] **Step 11: Verify in dev server**

```bash
pnpm dev
```

- Open http://localhost:3000
- Click the palette icon in the navbar — popover should appear with 7 swatches
- Click each theme — page should update colors in real time
- Reload the page — theme should persist
- Resize to mobile — hamburger should show drawer with swatch row at the bottom

- [ ] **Step 12: Commit**

```bash
git add src/components/Navbar/Navbar.tsx
git commit -m "feat: integrate ThemeSwitcher into Navbar and migrate Navbar colors to theme tokens"
```

---

## Task 9: Clean up _document.tsx

**Files:**
- Modify: `src/pages/_document.tsx`

- [ ] **Step 1: Remove hard-coded body `backgroundColor` from GlobalStyles**

In `src/pages/_document.tsx`, update the `GlobalStyles` styles:

```typescript
// Before
<GlobalStyles
  styles={{
    html: { height: '100%', width: '100%', margin: 0, padding: 0 },
    body: {
      margin: 0,
      padding: 0,
      backgroundColor: '#f5f5f5',
    },
    a: { textDecoration: 'none', color: 'inherit' },
  }}
/>

// After
<GlobalStyles
  styles={{
    html: { height: '100%', width: '100%', margin: 0, padding: 0 },
    body: { margin: 0, padding: 0 },
    a: { textDecoration: 'none', color: 'inherit' },
  }}
/>
```

MUI's `CssBaseline` (applied in `MuiThemeWrapper`) sets `body { background-color }` from `palette.background.default`, so the hard-coded value is redundant and would override it.

- [ ] **Step 2: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 3: Commit**

```bash
git add src/pages/_document.tsx
git commit -m "fix: remove hard-coded body background color from _document.tsx"
```

---

## Task 10: Final build verification

- [ ] **Step 1: Run full static export build**

```bash
pnpm build
```

Expected: build completes with no errors. Output in `out/`.

- [ ] **Step 2: Run lint**

```bash
pnpm lint
```

Expected: no errors

- [ ] **Step 3: Run TypeScript check**

```bash
pnpm tsc:check
```

Expected: no errors

- [ ] **Step 4: Smoke test all 7 themes in dev**

```bash
pnpm dev
```

Walk through each theme and verify the following sections update correctly:
- Navbar (background, text, drawer on mobile)
- WelcomeScreen (overlay, title text, accent on name, button)
- About section (background, text)
- Projects section (cards, background)
- Testimonials section
- Footer (background, text, icons)
- Scroll-to-top button
- Theme persists after page reload for each theme

- [ ] **Step 5: Final commit**

```bash
git add -A
git commit -m "feat: complete multi-theme support with 7 themes and Navbar switcher"
```
