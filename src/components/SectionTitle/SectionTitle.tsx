import { JSX } from 'react';

import { Box, Typography } from '@mui/material';

import { SectionTitleProps } from './types';

export default function SectionTitle({ title, subtitle }: Readonly<SectionTitleProps>): JSX.Element {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        py: { xs: 1, sm: 2, md: 6 },
      }}>
      {title && <Typography variant='h2'>{title}</Typography>}
      {subtitle && <Typography variant='body1'>{subtitle}</Typography>}
    </Box>
  );
}
