import { JSX } from 'react';

import CloseIcon from '@mui/icons-material/Close';
import EngineeringIcon from '@mui/icons-material/Engineering';
import { Box, Chip, Dialog, DialogContent, DialogTitle, IconButton, Typography } from '@mui/material';

import { ProjectRoleModalProps } from './types';

export default function ProjectRoleModal({
  open,
  onClose,
  project,
  responsibilities,
  skills = [],
  impact,
}: Readonly<ProjectRoleModalProps>): JSX.Element {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth='sm'>
      <DialogTitle sx={{ m: 0, p: 2 }}>
        <Box
          sx={{
            verticalAlign: 'middle',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}>
          <EngineeringIcon fontSize='large' />
          <Box>
            <Typography>{project.position}</Typography>
            <Typography
              variant='body2'
              color='text.secondary'>
              {project.name}
            </Typography>
          </Box>
        </Box>
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

      <DialogContent dividers>
        <Typography
          variant='subtitle1'
          fontWeight='bold'>
          About
        </Typography>
        <Box sx={{ pl: 3, mb: 2, mt: 1 }}>
          <Typography variant='body2'>{project.description}</Typography>
        </Box>

        <Typography
          variant='subtitle1'
          fontWeight='bold'>
          Responsibilities
        </Typography>
        <Box
          component='ul'
          sx={{ pl: 3, mb: 2 }}>
          {responsibilities.map(
            (item, index): JSX.Element => (
              <Typography
                key={item + index}
                component='li'
                variant='body2'>
                {item}
              </Typography>
            ),
          )}
        </Box>

        {project.technology.length !== 0 ? (
          <>
            <Typography
              variant='subtitle1'
              fontWeight='bold'>
              Technologies
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {project.technology.map(
                (technology, idx): JSX.Element => (
                  <Chip
                    key={technology + idx}
                    label={technology}
                    variant='filled'
                    size='small'
                  />
                ),
              )}
            </Box>
          </>
        ) : (
          <>
            <Typography
              variant='subtitle1'
              fontWeight='bold'>
              Technologies
            </Typography>
            <Box sx={{ pl: 3, mb: 2, mt: 1 }}>
              <Typography variant='body2'>Cannot disclose publicly!</Typography>
            </Box>
          </>
        )}

        {skills.length > 0 && (
          <>
            <Typography
              variant='subtitle1'
              fontWeight='bold'>
              Skills & Tools
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
              {skills.map(
                (skill, idx): JSX.Element => (
                  <Chip
                    key={skill + idx}
                    label={skill}
                    variant='outlined'
                  />
                ),
              )}
            </Box>
          </>
        )}

        {impact && (
          <>
            <Typography
              variant='subtitle1'
              fontWeight='bold'>
              Impact
            </Typography>
            <Typography variant='body2'>{impact}</Typography>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
