import type { AppProps } from 'next/app';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@/styles/theme';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function MyApp(props: Readonly<AppProps>) {
  const { Component, pageProps } = props;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
