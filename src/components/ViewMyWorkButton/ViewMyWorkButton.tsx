import { JSX } from 'react';

import { Button } from '@mui/material';

import { SectionPageIds } from '@/enums';

export default function ViewMyWorkButton(): JSX.Element {
  const goToProjects = (): void => {
    const htmlEl = document.documentElement;
    htmlEl.classList.add('smooth-scroll');
    setTimeout(() => {
      htmlEl.classList.remove('smooth-scroll');
    }, 600);

    const el = document.getElementById(SectionPageIds.PROJECTS);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Button
      variant='contained'
      color='primary'
      href='#projects'
      onClick={goToProjects}
      sx={{
        textTransform: 'none',
        px: { xs: 2, sm: 3 },
        py: { xs: 1, sm: 1.2 },
        backgroundColor: '#181b1e',
        border: '2px solid #d2f5ff',
        color: '#d2f5ff',
        fontSize: { xs: '16px', sm: '18px', md: '22px' },
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
