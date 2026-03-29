import { JSX } from '@emotion/react/jsx-runtime';

import { Box } from '@mui/material';

import Project from '@/components/Project';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data';
import { SectionPageIds } from '@/enums';

import FadeInOnScroll from '../FadeInOnScroll';

export default function Projects(): JSX.Element {
  return (
    <Box
      component='section'
      id={SectionPageIds.PROJECTS}>
      <FadeInOnScroll>
        <SectionTitle
          title='Projects'
          subtitle='A selection of projects I was involved with during my career'
        />
      </FadeInOnScroll>
      {projects.map(project => (
        <FadeInOnScroll key={project.name}>
          <Project
            key={project.name}
            project={project}
          />
        </FadeInOnScroll>
      ))}
    </Box>
  );
}
