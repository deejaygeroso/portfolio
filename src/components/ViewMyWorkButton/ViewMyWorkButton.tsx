import { JSX } from 'react';

import { Button } from '@mui/material';

export default function ViewMyWorkButton(): JSX.Element {
  const temporarilyAddSmoothScroll = (): void => {
    const htmlEl = document.documentElement;
    htmlEl.classList.add('smooth-scroll');
    setTimeout(() => {
      htmlEl.classList.remove('smooth-scroll');
    }, 600);
  };

  return (
    <Button
      variant='contained'
      color='primary'
      href='#projects'
      onClick={temporarilyAddSmoothScroll}
      sx={{
        textTransform: 'none',
        px: { xs: 2, sm: 3 }, // smaller padding on mobile
        py: { xs: 1, sm: 1.2 },
        backgroundColor: '#181b1e',
        border: '2px solid #d2f5ff',
        color: '#d2f5ff',
        fontSize: { xs: '16px', sm: '18px', md: '22px' }, // responsive font size
        fontWeight: 300,
        textDecoration: 'none',
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: '#1f2326',
          borderColor: '#e31b6d',
        },
        mt: 2,
      }}>
      View My Work
    </Button>
  );
}
