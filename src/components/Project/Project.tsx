import { JSX, useEffect, useState } from 'react';

import Image from 'next/image';

import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import EngineeringIcon from '@mui/icons-material/Engineering';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Container,
  IconButton,
  Typography,
} from '@mui/material';

import TeamMembersModal from '@/components/TeamMembersModal';

import ProjectRoleModal from '../ProjectRoleModal';
import { ProjectProps } from './types';

export default function Project({ project }: Readonly<ProjectProps>): JSX.Element {
  const [teamMembersModalOpen, setTeamMembersModalOpen] = useState(false);
  const [projectRoleModalOpen, setProjectRoleModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const photos = project.photos ?? [];
  const slidesCount = Math.max(0, photos.length);

  // Keep currentIndex in bounds if photos array changes
  useEffect(() => {
    if (slidesCount === 0) {
      setCurrentIndex(0);
    } else if (currentIndex >= slidesCount) {
      setCurrentIndex(slidesCount - 1);
    }
  }, [slidesCount, currentIndex]);

  const goToLink = (url: string): void => {
    if (!url) {
      alert('Sorry, Project no longer exists.');
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handlePrev = (): void => {
    if (slidesCount <= 1) return;
    setCurrentIndex(prev => (prev === 0 ? slidesCount - 1 : prev - 1));
  };

  const handleNext = (): void => {
    if (slidesCount <= 1) return;
    setCurrentIndex(prev => (prev === slidesCount - 1 ? 0 : prev + 1));
  };

  // percent of the TRACK that corresponds to one slide
  const slidePercentOfTrack = slidesCount > 0 ? 100 / slidesCount : 100;
  const translatePercent = currentIndex * slidePercentOfTrack;

  return (
    <Container
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
        py: { xs: 1, sm: 2, md: 6 },
      }}>
      <Card sx={{ width: '100%', maxWidth: 845, mx: 'auto' }}>
        <CardHeader
          avatar={<Avatar aria-label='project-avatar'>{project.name.charAt(0)}</Avatar>}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={project.name}
          subheader={project.date}
          sx={{ borderBottom: '1px solid #ccc' }}
        />

        {/* Carousel area */}
        <CardMedia
          sx={{
            width: '100%',
            height: { xs: 240, sm: 360, md: 480 },
            position: 'relative',
            overflow: 'hidden',
          }}>
          {/* TRACK */}
          <Box
            sx={{
              display: 'flex',
              height: '100%',
              width: `${Math.max(1, slidesCount) * 100}%`, // track width = N * 100%
              transform: `translateX(-${translatePercent}%)`,
              transition: 'transform 500ms ease-in-out',
            }}>
            {photos.map((photo, idx) => (
              <Box
                key={idx}
                sx={{
                  // each slide should take (100 / N)% of the TRACK width
                  flex: `0 0 ${slidesCount > 0 ? 100 / slidesCount : 100}%`,
                  width: `${slidesCount > 0 ? 100 / slidesCount : 100}%`,
                  height: '100%',
                  position: 'relative', // for next/image fill
                }}>
                <Image
                  src={photo.webP}
                  alt={`${project.name} ${idx + 1}`}
                  fill
                  style={{ objectFit: 'contain' }}
                  // priority / placeholder can be added as needed
                />
              </Box>
            ))}
          </Box>

          {/* Prev/Next controls */}
          {slidesCount > 1 && (
            <>
              <IconButton
                aria-label='previous'
                onClick={handlePrev}
                sx={{
                  position: 'absolute',
                  left: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  bgcolor: 'rgba(255,255,255,0.6)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                }}>
                <ArrowBackIosNewIcon />
              </IconButton>

              <IconButton
                aria-label='next'
                onClick={handleNext}
                sx={{
                  position: 'absolute',
                  right: 8,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  zIndex: 2,
                  bgcolor: 'rgba(255,255,255,0.6)',
                  '&:hover': { bgcolor: 'rgba(255,255,255,0.9)' },
                }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </>
          )}
        </CardMedia>

        {/* Dots */}
        {slidesCount > 1 && (
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, p: 1 }}>
            {photos.map((_, idx) => (
              <Box
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: idx === currentIndex ? 'primary.main' : 'grey.400',
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </Box>
        )}

        {/* Content */}
        <CardContent sx={{ textAlign: 'left' }}>
          <Typography
            variant='body2'
            sx={{
              color: 'text.secondary',
              verticalAlign: 'middle',
              display: 'flex',
              alignItems: 'center',
              mb: 1,
              gap: 1,
            }}>
            <EngineeringIcon /> {project.position}
          </Typography>
          <Typography
            variant='body2'
            sx={{ color: 'text.secondary' }}>
            {project.description}
          </Typography>
        </CardContent>

        <CardActions
          disableSpacing
          sx={{ borderTop: '1px solid #ccc' }}>
          <IconButton
            onClick={(): void => goToLink(project.domains[0]?.url)}
            color='primary'
            aria-label='open project link'
            size='small'>
            <OpenInNewIcon />
          </IconButton>
          <Button
            size='small'
            onClick={(): void => setProjectRoleModalOpen(true)}>
            Role
          </Button>
          <Button
            size='small'
            onClick={(): void => setTeamMembersModalOpen(true)}>
            Teammates
          </Button>
        </CardActions>
      </Card>

      <TeamMembersModal
        open={teamMembersModalOpen}
        onClose={(): void => setTeamMembersModalOpen(false)}
        teamMembers={project.members}
      />
      <ProjectRoleModal
        open={projectRoleModalOpen}
        onClose={(): void => setProjectRoleModalOpen(false)}
        project={project}
      />
    </Container>
  );
}
