import type { AppProps } from 'next/app';

import Projects from '@/components/Projects';
import WelcomeScreen from '@/components/WelcomeScreen';

export default function MyApp(props: Readonly<AppProps>) {
  const { Component, pageProps } = props;

  return (
    <>
      <WelcomeScreen />
      <Projects />
    </>
  );
}
