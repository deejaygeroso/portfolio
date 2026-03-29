'use client';

import { JSX } from 'react';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { Fab, Zoom, useScrollTrigger } from '@mui/material';

export default function ScrollToTopFab(): JSX.Element {
  const visible = useScrollTrigger({
    disableHysteresis: true,
    threshold: 400,
  });

  const handleClick = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Zoom in={visible}>
      <Fab
        onClick={handleClick}
        aria-label='Scroll to top'
        size='medium'
        sx={{
          position: 'fixed',
          bottom: { xs: 24, md: 32 },
          right: { xs: 24, md: 32 },
          bgcolor: '#171a1c',
          color: '#ffffff',
          border: '2px solid rgba(255,255,255,0.15)',
          '&:hover': {
            bgcolor: 'primary.main',
            border: '2px solid transparent',
          },
          transition: 'background-color 0.2s ease',
          zIndex: 1200,
        }}>
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
