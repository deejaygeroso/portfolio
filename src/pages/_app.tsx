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

  // resolvedTheme is undefined on the first render before next-themes reads localStorage.
  // _document.tsx injects an inline script that sets data-theme on <html> from localStorage
  // before React renders, so this attribute is already correct on the first paint.
  const muiTheme = useMemo(() => {
    const htmlAttr =
      typeof document !== 'undefined'
        ? document.documentElement.getAttribute('data-theme')
        : null;
    const key = THEME_KEYS.find(k => k === (resolvedTheme ?? htmlAttr)) ?? 'light';
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
