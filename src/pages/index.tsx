import { JSX } from 'react';

import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import WelcomeScreen from '@/components/WelcomeScreen';

export default function MyApp(): JSX.Element {
  return (
    <>
      <WelcomeScreen />
      <Projects />
      <Testimonials />
    </>
  );
}
