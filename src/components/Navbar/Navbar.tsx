'use client';

import { JSX, useState } from 'react';

import Image from 'next/image';

import CloseIcon from '@mui/icons-material/Close';
import {
  AppBar,
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
  useScrollTrigger,
} from '@mui/material';

import { deejayWebP } from '@/assets/images/webp';
import ThemeSwitcher from '@/components/ThemeSwitcher/ThemeSwitcher';
import { SectionPageIds } from '@/enums';
import { THEME_KEYS, themeLabels, themeSwatchColors } from '@/styles/themeMap';
import { scrollToSection } from '@/utils';

import { useTheme as useNextTheme } from 'next-themes';

const NAV_LINKS = [
  { label: 'Home', id: SectionPageIds.MAIN_PAGE },
  { label: 'About', id: SectionPageIds.ABOUT },
  { label: 'Projects', id: SectionPageIds.PROJECTS },
  { label: 'Testimonials', id: SectionPageIds.TESTIMONIALS },
  { label: 'Contact', id: SectionPageIds.FOOTER },
];

export default function Navbar(): JSX.Element {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const scrolled = useScrollTrigger({
    disableHysteresis: true,
    threshold: 80,
  });

  const { resolvedTheme, setTheme } = useNextTheme();

  const handleNavClick = (id: string): void => {
    setDrawerOpen(false);
    scrollToSection(id);
  };

  return (
    <>
      <AppBar
        position='fixed'
        elevation={scrolled ? 4 : 0}
        sx={{
          bgcolor: scrolled ? 'nav.bg' : 'transparent',
          backdropFilter: scrolled ? 'blur(8px)' : 'none',
          transition: 'background-color 0.3s ease, backdrop-filter 0.3s ease',
        }}>
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, md: 4 } }}>
          <Box
            display='flex'
            alignItems='center'
            gap={1.5}>
            <Avatar
              sx={{ width: 40, height: 40, cursor: 'pointer' }}
              onClick={() => handleNavClick(SectionPageIds.MAIN_PAGE)}>
              <Image
                src={deejayWebP}
                alt='Deejay Geroso'
                width={40}
                height={40}
                style={{ borderRadius: '50%' }}
              />
            </Avatar>
            <Typography
              variant='h6'
              sx={{
                fontWeight: 500,
                color: 'nav.text',
                cursor: 'pointer',
                letterSpacing: 1,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
              onClick={() => handleNavClick(SectionPageIds.MAIN_PAGE)}>
              Deejay Geroso
            </Typography>
          </Box>

          {/* Desktop nav links — md and above */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, alignItems: 'center' }}>
            {NAV_LINKS.map(link => (
              <Button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                sx={{
                  color: 'nav.text',
                  textTransform: 'none',
                  fontSize: '0.95rem',
                  fontWeight: 400,
                  px: 1.5,
                  borderRadius: 2,
                  transition: 'color 0.2s ease',
                  '&:hover': {
                    color: 'primary.main',
                    bgcolor: 'transparent',
                  },
                }}>
                {link.label}
              </Button>
            ))}
          </Box>

          {/* Theme switcher — always visible */}
          <ThemeSwitcher />
        </Toolbar>
      </AppBar>

      {/* Mobile drawer */}
      <Drawer
        anchor='right'
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 240,
            bgcolor: 'nav.drawerBg',
            color: 'nav.text',
          },
        }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton
            aria-label='Close navigation menu'
            onClick={() => setDrawerOpen(false)}
            sx={{ color: 'nav.text' }}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.12)' }} />
        <List>
          {NAV_LINKS.map(link => (
            <ListItem
              key={link.id}
              disablePadding>
              <ListItemButton
                onClick={() => handleNavClick(link.id)}
                sx={{
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
                }}>
                <ListItemText
                  primary={link.label}
                  slotProps={{
                    primary: { sx: { color: 'nav.text', fontWeight: 400 } },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        {/* Theme swatches in mobile drawer */}
        <Box sx={{ px: 2, py: 1.5, borderTop: '1px solid rgba(255,255,255,0.12)' }}>
          <Typography
            variant='caption'
            sx={{ color: 'nav.text', opacity: 0.6, textTransform: 'uppercase', letterSpacing: 1 }}>
            Theme
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.75, flexWrap: 'wrap', mt: 1 }}>
            {THEME_KEYS.map(key => {
              const swatch = themeSwatchColors[key];
              const isActive = resolvedTheme === key;
              return (
                <Tooltip
                  key={key}
                  title={themeLabels[key]}
                  placement='top'>
                  <Box
                    component='button'
                    type='button'
                    onClick={() => {
                      setTheme(key);
                      setDrawerOpen(false);
                    }}
                    aria-label={themeLabels[key]}
                    aria-pressed={isActive}
                    sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: swatch.bg,
                      borderWidth: isActive ? 3 : 2,
                      borderStyle: 'solid',
                      borderColor: isActive ? swatch.border : 'rgba(255,255,255,0.3)',
                      outline: isActive ? `2px solid ${swatch.border}` : 'none',
                      outlineOffset: 1,
                      cursor: 'pointer',
                      transition: 'transform 0.15s ease',
                      '&:hover': { transform: 'scale(1.15)' },
                      p: 0,
                    }}
                  />
                </Tooltip>
              );
            })}
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
