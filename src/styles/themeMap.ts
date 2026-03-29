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
