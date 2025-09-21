import { JSX } from '@emotion/react/jsx-runtime';

import { Box } from '@mui/material';

import Project from '@/components/Project';
import { projects } from '@/data';

export default function Projects(): JSX.Element {
  return (
    <Box>
      {projects.map(project => (
        <Project
          key={project.name}
          project={project}
        />
      ))}
    </Box>
  );
}
