import { JSX } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  Avatar,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { IMember } from '@/interfaces';

import { TeamMembersModalProps } from './types';

export default function TeamMembersModal({ open, onClose, teamMembers }: Readonly<TeamMembersModalProps>): JSX.Element {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
      closeAfterTransition={false}
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='sm'>
      <DialogTitle
        sx={{
          m: 0,
          p: 2,
          borderBottom: '1px solid',
          borderColor: 'divider',
        }}>
        Our Team
        <IconButton
          aria-label='close'
          onClick={onClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 14,
          }}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ p: 0, m: 0 }}>
        <Box sx={{ px: 2, pb: 2, mt: 1 }}>
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
      </DialogContent>
      {isMobile && (
        <DialogActions
          sx={{
            borderTop: '1px solid',
            borderColor: 'divider',
          }}>
          <Button
            onClick={onClose}
            variant='contained'
            fullWidth>
            Close
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
}
