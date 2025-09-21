import { JSX } from '@emotion/react/jsx-runtime';

import { Box } from '@mui/material';

import Project from '@/components/Project';
import SectionTitle from '@/components/SectionTitle';
import { projects } from '@/data';

export default function Projects(): JSX.Element {
  return (
    <Box component='section'>
      <SectionTitle
        title='Projects'
        subtitle='A selection of projects I was involved with during my career'
      />
      {projects.map(project => (
        <Project
          key={project.name}
          project={project}
        />
      ))}
    </Box>
  );
}
