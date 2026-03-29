import React, { useMemo } from 'react';

import type { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import { THEME_KEYS, getTheme, themeMap } from '@/styles/themeMap';

import { ThemeProvider as NextThemesProvider, useTheme as useNextTheme } from 'next-themes';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function MuiThemeWrapper({ children }: { children: React.ReactNode }) {
  const { resolvedTheme } = useNextTheme();
  const [mounted, setMounted] = React.useState(false);

  // Wait for client-side hydration to complete
  React.useEffect(() => {
    setMounted(true);
  }, []);

  const muiTheme = useMemo(() => {
    // During SSR and before hydration, use a consistent default
    if (!mounted) {
      return themeMap.light; // or themeMap.dark based on your preference
    }

    return getTheme(resolvedTheme ?? 'light');
  }, [resolvedTheme, mounted]);

  // Prevent hydration mismatch by not rendering theme-dependent content until mounted
  if (!mounted) {
    return (
      <ThemeProvider theme={themeMap.light}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    );
  }

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
