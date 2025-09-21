'use client';

import { JSX } from 'react';

import Link from 'next/link';

import { Email, Facebook, GitHub, Instagram, LinkedIn, X as Twitter } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';

import { contacts } from '@/data';
import { SectionPageIds } from '@/enums';
import { ISocialMedia } from '@/interfaces';

import packageJson from '../../../package.json';
import SectionTitle from '../SectionTitle';

export default function Footer(): JSX.Element {
  const year = new Date().getFullYear();
  const appVersion = packageJson.version;

  const mailTo = (): void => {
    window.location.href = `mailto:${contacts.email}?subject=Subject&body=message%20goes%20here`;
  };

  const renderSocialMediaIcon = (socialMediaLink: string): JSX.Element => {
    switch (socialMediaLink) {
      case contacts.socialMedias[0].link:
        return (
          <Facebook
            fontSize='inherit'
            sx={{ color: '#ffffff' }}
          />
        );
      case contacts.socialMedias[1].link:
        return (
          <GitHub
            fontSize='inherit'
            sx={{ color: '#ffffff' }}
          />
        );
      case contacts.socialMedias[2].link:
        return (
          <Instagram
            fontSize='inherit'
            sx={{ color: '#ffffff' }}
          />
        );
      case contacts.socialMedias[3].link:
        return (
          <LinkedIn
            fontSize='inherit'
            sx={{ color: '#ffffff' }}
          />
        );
      case contacts.socialMedias[4].link:
        return (
          <Twitter
            fontSize='inherit'
            sx={{ color: '#ffffff' }}
          />
        );
    }
    return <></>;
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
            color: 'text.primary',
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
        {contacts.socialMedias.map((socialMedia: ISocialMedia) => (
          <IconButton
            key={socialMedia.id}
            component={Link}
            href={socialMedia.link}
            target='_blank'
            rel='noopener noreferrer'
            aria-label={socialMedia.id}
            sx={{
              color: 'text.primary',
              fontSize: { xs: 30, sm: 40, md: 75, lg: 75 },
              mx: 1,
              '&:hover': { color: 'primary.main' },
            }}>
            {renderSocialMediaIcon(socialMedia.link)}
          </IconButton>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 3 }}>
        <Typography variant='body2'>Powered by NextJS @ {year}</Typography>
        <Typography variant='body2'>App Version: {appVersion}</Typography>
      </Box>
    </Box>
  );
}
