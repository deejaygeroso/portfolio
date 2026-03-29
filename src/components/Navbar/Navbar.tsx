'use client';

import { JSX, useState } from 'react';

import Image from 'next/image';

import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
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
  Typography,
  useScrollTrigger,
} from '@mui/material';

import { deejayWebP } from '@/assets/images/webp';
import { SectionPageIds } from '@/enums';
import { scrollToSection } from '@/utils';

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
          bgcolor: scrolled ? 'rgba(23, 26, 28, 0.96)' : 'transparent',
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
                color: '#ffffff',
                cursor: 'pointer',
                letterSpacing: 1,
                fontSize: { xs: '1rem', md: '1.1rem' },
              }}
              onClick={() => handleNavClick(SectionPageIds.MAIN_PAGE)}>
              Deejay Geroso
            </Typography>
          </Box>

          {/* Desktop nav */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5 }}>
            {NAV_LINKS.map(link => (
              <Button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                sx={{
                  color: '#ffffff',
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

          {/* Mobile hamburger */}
          <IconButton
            aria-label='Open navigation menu'
            onClick={() => setDrawerOpen(true)}
            sx={{ display: { xs: 'flex', md: 'none' }, color: '#ffffff' }}>
            <MenuIcon />
          </IconButton>
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
            bgcolor: '#171a1c',
            color: '#ffffff',
          },
        }}>
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
          <IconButton
            aria-label='Close navigation menu'
            onClick={() => setDrawerOpen(false)}
            sx={{ color: '#ffffff' }}>
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
                    primary: { sx: { color: '#ffffff', fontWeight: 400 } },
                  }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
