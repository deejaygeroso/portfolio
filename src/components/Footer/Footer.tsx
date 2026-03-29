'use client';

import { JSX } from 'react';

import Link from 'next/link';

import { Email, Facebook, GitHub, Instagram, LinkedIn, X as Twitter } from '@mui/icons-material';
import { Box, IconButton, SvgIconTypeMap, Typography } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

import { contacts } from '@/data';
import { SectionPageIds } from '@/enums';
import { ISocialMedia } from '@/interfaces';

import packageJson from '../../../package.json';
import SectionTitle from '../SectionTitle';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type MuiIconComponent = OverridableComponent<SvgIconTypeMap<Record<string, any>, 'svg'>>;

const SOCIAL_ICON_MAP: Record<string, MuiIconComponent> = {
  facebook: Facebook,
  github: GitHub,
  instagram: Instagram,
  linkedin: LinkedIn,
  twitter: Twitter,
};

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const appVersion = packageJson.version;

  const mailTo = (): void => {
    window.location.href = `mailto:${contacts.email}?subject=Subject&body=message%20goes%20here`;
  };

  return (
    <Box
      component='footer'
      id={SectionPageIds.FOOTER}
      sx={{
        bgcolor: '#181b1e',
        color: '#ffffff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        py: 6,
      }}>
      <SectionTitle title='Contact Me' />

      {contacts.email && (
        <Box
          onClick={mailTo}
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            color: 'inherit',
            transition: 'color 0.2s ease',
            '&:hover': { color: 'primary.main' },
            mb: 2,
          }}>
          <Email fontSize='medium' />
          <Typography
            variant='body1'
            sx={{ ml: 1 }}>
            {contacts.email}
          </Typography>
        </Box>
      )}

      <Box>
        {contacts.socialMedias.map((socialMedia: ISocialMedia) => {
          const IconComponent = SOCIAL_ICON_MAP[socialMedia.id.toLowerCase()];
          if (!IconComponent) return null;
          return (
            <IconButton
              key={socialMedia.id}
              component={Link}
              href={socialMedia.link}
              target='_blank'
              rel='noopener noreferrer'
              aria-label={socialMedia.id}
              sx={{
                color: '#ffffff',
                fontSize: { xs: 28, sm: 32, md: 36 },
                mx: 1,
                transition: 'transform 0.2s ease, color 0.2s ease',
                '&:hover': {
                  color: 'primary.main',
                  transform: 'scale(1.15)',
                  background: 'transparent',
                },
              }}>
              <IconComponent fontSize='inherit' />
            </IconButton>
          );
        })}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant='body2'>Powered by NextJS @ {year}</Typography>
        <Typography variant='body2'>App Version: {appVersion}</Typography>
      </Box>
    </Box>
  );
}
