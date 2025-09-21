import { JSX } from 'react';

import { Card, Container } from '@mui/material';

import { ProjectProps } from './types';

export default function Project({ children }: Readonly<ProjectProps>): JSX.Element {
  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        py: { xs: 6, sm: 8, md: 10 },
      }}>
      <Card>{children}</Card>
    </Container>
  );
}
