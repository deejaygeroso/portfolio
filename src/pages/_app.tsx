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

  // resolvedTheme is undefined on the initial render before next-themes reads localStorage.
  // We fall back to 'light' so MUI always has a valid theme object.
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
      attribute='data-theme'
      enableSystem={false}>
      <MuiThemeWrapper>
        <Component {...pageProps} />
      </MuiThemeWrapper>
    </NextThemesProvider>
  );
}
