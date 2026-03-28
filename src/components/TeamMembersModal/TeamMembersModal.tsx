import { JSX } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Avatar,
  Box,
  Dialog,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';

import { IMember } from '@/interfaces';

import { TeamMembersModalProps } from './types';

export default function TeamMembersModal({ open, onClose, teamMembers }: Readonly<TeamMembersModalProps>): JSX.Element {
  const getLinkedInProps = (linkedIn: IMember['linkedIn']) => {
    const linkedInUrl = linkedIn?.trim() ?? '';
    if (linkedInUrl === '') {
      return {};
    }
    return {
      component: 'a' as const,
      href: linkedInUrl,
      target: '_blank' as const,
      rel: 'noopener noreferrer',
    };
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='sm'>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        Our Team
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <Box sx={{ px: 2, pb: 2 }}>
        <List>
          {teamMembers.map(member => (
            <ListItem
              key={member.name}
              {...getLinkedInProps(member.linkedIn)}
              sx={{
                border: '1px solid',
                borderColor: 'divider',
                borderRadius: 2,
                mb: 1.5,
                transition: 'background-color 0.2s ease',
                '&:hover': {
                  backgroundColor: 'action.hover',
                },
              }}>
              <ListItemAvatar>
                <Avatar
                  src={
                    (typeof member.photo.webP === 'string' ? member.photo.webP : member.photo.webP?.src) ||
                    (typeof member.photo.jpg === 'string' ? member.photo.jpg : member.photo.jpg?.src) ||
                    undefined
                  }
                  alt={member.name}
                />
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography
                    variant='subtitle1'
                    fontWeight='bold'>
                    {member.name}
                  </Typography>
                }
                secondary={member.position}
              />
              {member.linkedIn && <LinkedInIcon color='primary' />}
            </ListItem>
          ))}
        </List>
      </Box>
    </Dialog>
  );
}
