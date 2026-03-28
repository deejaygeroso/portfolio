import { JSX } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import Footer from '@/components/Footer';
import WelcomeScreen from '@/components/WelcomeScreen';

const Projects = dynamic(() => import('@/components/Projects'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));

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
