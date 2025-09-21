import { JSX, useState } from 'react';

import Image from 'next/image';

import EngineeringIcon from '@mui/icons-material/Engineering';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import {
  Avatar,
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
import { styled } from '@mui/material/styles';

import TeamMembersModal from '@/components/TeamMembersModal';

import ProjectRoleModal from '../ProjectRoleModal';
import { ProjectProps } from './types';

const ProjectImage = styled(Image)(() => ({
  objectFit: 'contain',
  maxWidth: '100%',
  maxHeight: '100%',
  height: 'auto',
  width: 'auto',
}));

export default function Project({ project }: Readonly<ProjectProps>): JSX.Element {
  const [teamMembersModalOpen, setTeamMembersModalOpen] = useState(false);
  const [projectRoleModalOpen, setProjectRoleModalOpen] = useState(false);

  const goToLink = (url: string): void => {
    if (!url) {
      alert('Sorry, Project no longer exists.');
      return;
    }
    window.open(url, '_blank', 'noopener,noreferrer');
  };
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
      <Card sx={{ maxWidth: 845 }}>
        <CardHeader
          avatar={<Avatar aria-label='recipe'>{project.name.charAt(0)}</Avatar>}
          action={
            <IconButton aria-label='settings'>
              <MoreVertIcon />
            </IconButton>
          }
          title={project.name}
          subheader={project.date}
          slotProps={{
            title: {
              fontSize: '1.25rem',
              fontWeight: 'bold',
            },
            subheader: {
              fontSize: '0.675rem',
            },
          }}
          sx={{
            borderBottom: '1px solid #ccc',
          }}
        />
        <CardMedia
          sx={{
            maxHeight: 720,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative', // required for next/image fill
            overflow: 'hidden',
          }}>
          <ProjectImage
            src={project.photos[0].webP}
            alt={project.name}
          />
        </CardMedia>
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
          sx={{
            borderTop: '1px solid #ccc',
          }}>
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
