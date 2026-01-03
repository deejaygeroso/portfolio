import { useState } from 'react';

import { JSX } from '@emotion/react/jsx-runtime';
import Image from 'next/image';

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

import ProjectRoleModal from '@/components/ProjectRoleModal';
import TeamMembersModal from '@/components/TeamMembersModal';

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { ProjectProps } from './types';
import { IProject } from '@/interfaces';

export default function ProjectCard({ project }: Readonly<ProjectProps>): JSX.Element {
  const photos = project.photos ?? [];

  const [teamMembersModalOpen, setTeamMembersModalOpen] = useState(false);
  const [projectRoleModalOpen, setProjectRoleModalOpen] = useState(false);

  const [aspectRatio, setAspectRatio] = useState<number | null>(null);

  const renderSubHeader = (project: IProject): string => {
    if (!project.date) {
      return project.position;
    }

    return `${project.position} (${project.date})`; 
  }

  return (
    <Container sx={{ py: { xs: 1, sm: 2, md: 6 } }}>
      <Card sx={{ width: '100%', maxWidth: 845, mx: 'auto' }}>
        <CardHeader
          avatar={<Avatar>{project.name.charAt(0)}</Avatar>}
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={project.name}
          subheader={renderSubHeader(project)}
          sx={{ borderBottom: '1px solid #ccc' }}
        />

        <CardMedia
          sx={{
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            background: '#f1f1f1',
            // fallback default height before image loads
            height: aspectRatio ? 'auto' : { xs: 240, sm: 360, md: 480 },
            aspectRatio: aspectRatio ? `${1 / aspectRatio} / 1` : 'unset',
          }}>
          <Box
            sx={{
              width: '100%',
              height: '100%',
              '&:hover .swiper-button-next, &:hover .swiper-button-prev': {
                opacity: 1,
              },
              '.swiper-button-next, .swiper-button-prev': {
                opacity: 0,
                transition: 'opacity 0.3s',
                color: '#000',
              },
              '.swiper-button-disabled': {
                opacity: '0 !important',
                pointerEvents: 'none',
              },
            }}>
            <Swiper
              modules={[Navigation, Pagination]}
              navigation
              pagination={{ clickable: true }}
              style={{ width: '100%', height: '100%' }}>
              {photos.map((photo, idx) => (
                <SwiperSlide key={photo.webP as string}>
                  <Box sx={{ width: '100%', height: '100%', position: 'relative' }}>
                    <Image
                      src={photo.webP}
                      alt={`${project.name} ${idx + 1}`}
                      fill
                      style={{ objectFit: 'contain' }}
                      onLoad={
                        idx === 0
                          ? e => {
                              const { naturalWidth, naturalHeight } = e.currentTarget;
                              setAspectRatio(naturalHeight / naturalWidth);
                            }
                          : undefined
                      }
                    />
                  </Box>
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </CardMedia>

        <CardContent>
          <Typography
            variant='body2'
            color='text.secondary'>
            {project.description}
          </Typography>
        </CardContent>

        <CardActions>
          <IconButton
            onClick={() => window.open(project.domains[0]?.url, '_blank', 'noopener,noreferrer')}
            color='primary'>
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
