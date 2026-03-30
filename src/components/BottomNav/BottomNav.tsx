'use client';

import { JSX, SyntheticEvent, useEffect, useState } from 'react';

import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import GridViewIcon from '@mui/icons-material/GridView';
import InfoIcon from '@mui/icons-material/Info';
import LayersIcon from '@mui/icons-material/Layers';
import PhoneIcon from '@mui/icons-material/Phone';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';

import { SectionPageIds } from '@/enums';
import { scrollToSection } from '@/utils';

const NAV_ITEMS = [
  { label: 'Home', id: SectionPageIds.MAIN_PAGE, icon: <GridViewIcon /> },
  { label: 'About', id: SectionPageIds.ABOUT, icon: <InfoIcon /> },
  { label: 'Projects', id: SectionPageIds.PROJECTS, icon: <LayersIcon /> },
  { label: 'Reviews', id: SectionPageIds.TESTIMONIALS, icon: <FormatQuoteIcon /> },
  { label: 'Contact', id: SectionPageIds.FOOTER, icon: <PhoneIcon /> },
];

export default function BottomNav(): JSX.Element {
  const [activeId, setActiveId] = useState<string>(SectionPageIds.MAIN_PAGE);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveId(id);
          }
        },
        { threshold: 0.3 },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach(o => o.disconnect());
  }, []);

  const handleChange = (_: SyntheticEvent, newValue: string): void => {
    setActiveId(newValue);
    scrollToSection(newValue);
  };

  return (
    <Paper
      sx={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1100,
        display: { xs: 'block', md: 'none' },
      }}
      elevation={8}>
      <BottomNavigation
        value={activeId}
        onChange={handleChange}
        sx={{ bgcolor: 'nav.bg' }}>
        {NAV_ITEMS.map(({ label, id, icon }) => (
          <BottomNavigationAction
            key={id}
            label={label}
            value={id}
            icon={icon}
            sx={{
              color: 'nav.text',
              minWidth: 0,
              '&.Mui-selected': { color: 'primary.main' },
            }}
          />
        ))}
      </BottomNavigation>
    </Paper>
  );
}
