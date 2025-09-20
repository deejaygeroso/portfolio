import WelcomeScreen from '@/components/WelcomeScreen';
import type { AppProps } from 'next/app';

export default function MyApp(props: Readonly<AppProps>) {
  const { Component, pageProps } = props;

  return (
    <>
      <WelcomeScreen />
    </>
  );
}
