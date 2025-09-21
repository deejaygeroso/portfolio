import React, { EffectCallback, useEffect } from 'react';

import { JSX } from '@emotion/react/jsx-runtime';
import Image from 'next/image';

import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { styled } from '@mui/material/styles';

import { deejay250x250 } from '@/assets/images';
import ViewMyWorkButton from '@/components/ViewMyWorkButton';
import { SectionPageIds } from '@/enums';

import executeTitleTypeAnimation from './executeTitleTypeAnimation';

const ProfileImage = styled(Image)(({ theme }) => ({
  borderRadius: '50%',
  objectFit: 'cover',
  boxShadow: theme.shadows[3],
  marginBottom: theme.spacing(4),
  width: '150px',
  height: '150px',
  [theme.breakpoints.up('sm')]: {
    width: '200px',
    height: '200px',
  },
  [theme.breakpoints.up('md')]: {
    width: '250px',
    height: '250px',
  },
}));

export default function WelcomeScreen(): JSX.Element {
  useEffect((): ReturnType<EffectCallback> => {
    executeTitleTypeAnimation();
  }, []);

  return (
    <Box
      id={SectionPageIds.MAIN_PAGE}
      component='section'
      sx={{
        minHeight: '100vh',
        backgroundImage: 'url(/main-wallpaper.webp)',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          textAlign: 'center',
          background: '#171a1cf2',
          minHeight: '100vh',
        }}>
        <Container
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            py: { xs: 6, sm: 8, md: 10 },
          }}>
          <ProfileImage
            alt="Deejay Geroso's Profile Picture"
            id='profile-picture'
            src={deejay250x250}
            priority
          />
          <Typography
            id='title1'
            sx={{
              typography: { xs: 'h5', sm: 'h4', md: 'h3' },
              color: '#d2f5ff',
              mt: 0,
              '& > #title1-author-name': {
                color: '#e31b6d',
              },
            }}
          />
          <Typography
            id='title2'
            sx={{
              typography: { xs: 'h5', sm: 'h4', md: 'h3' },
              color: '#d2f5ff',
              mt: 1,
            }}
          />
          <Box mt={4}>
            <ViewMyWorkButton />
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
