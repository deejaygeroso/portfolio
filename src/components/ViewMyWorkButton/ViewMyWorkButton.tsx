import { JSX } from 'react';

import { Button } from '@mui/material';

import { SectionPageIds } from '@/enums';
import { scrollToSection } from '@/utils';

export default function ViewMyWorkButton(): JSX.Element {
  const goToProjects = (): void => {
    scrollToSection(SectionPageIds.PROJECTS);
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
        backgroundColor: 'welcome.buttonBg',
        border: '2px solid',
        borderColor: 'welcome.titleColor',
        color: 'welcome.titleColor',
        fontSize: { xs: '16px', sm: '18px', md: '22px' },
        fontWeight: 300,
        textDecoration: 'none',
        borderRadius: 3,
        transition: 'all 0.3s ease',
        '&:hover': {
          backgroundColor: 'welcome.buttonHoverBg',
          borderColor: 'welcome.accentColor',
          color: 'welcome.accentColor',
        },
        mt: 2,
      }}>
      View My Work
    </Button>
  );
}
