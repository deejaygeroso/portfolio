import { JSX } from 'react';

import dynamic from 'next/dynamic';
import Head from 'next/head';

import { Box } from '@mui/material';

import Navbar from '@/components/Navbar';
import ScrollToTopFab from '@/components/ScrollToTopFab';
import WelcomeScreen from '@/components/WelcomeScreen';

const About = dynamic(() => import('@/components/About'));
const Projects = dynamic(() => import('@/components/Projects'));
const Testimonials = dynamic(() => import('@/components/Testimonials'));
const Footer = dynamic(() => import('@/components/Footer'));
const FadeInOnScroll = dynamic(() => import('@/components/FadeInOnScroll'));

export default function MyApp(): JSX.Element {
  return (
    <>
      <Head>
        <title>Deejay Geroso</title>
      </Head>

      <Navbar />

      {/* Hero sits behind the fixed navbar — no offset needed as it's full-viewport */}
      <WelcomeScreen />

      {/* Sections below hero each get scroll-margin-top so the navbar doesn't cover the heading */}
      <Box sx={{ '& > section': { scrollMarginTop: '64px' } }}>
        <FadeInOnScroll>
          <About />
        </FadeInOnScroll>

        <Projects />

        <FadeInOnScroll>
          <Testimonials />
        </FadeInOnScroll>

        <FadeInOnScroll>
          <Footer />
        </FadeInOnScroll>
      </Box>

      <ScrollToTopFab />
    </>
  );
}
