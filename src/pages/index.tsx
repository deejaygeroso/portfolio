import { JSX } from 'react';

import Footer from '@/components/Footer';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import WelcomeScreen from '@/components/WelcomeScreen';
import Head from 'next/head';

export default function MyApp(): JSX.Element {
  return (
    <>
      <Head>
        <title>Deejay Geroso</title>
      </Head>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
      <Footer />
    </>
  );
}
