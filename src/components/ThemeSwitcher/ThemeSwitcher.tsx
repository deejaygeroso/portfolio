'use client';

import { JSX, MouseEvent, useState } from 'react';

import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import {
  Box,
  IconButton,
  Popover,
  Tooltip,
  Typography,
} from '@mui/material';
import { useTheme as useNextTheme } from 'next-themes';

import {
  THEME_KEYS,
  ThemeKey,
  themeLabels,
  themeSwatchColors,
} from '@/styles/themeMap';

export default function ThemeSwitcher(): JSX.Element {
  const { resolvedTheme, setTheme } = useNextTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleOpen = (event: MouseEvent<HTMLButtonElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const handleSelect = (key: ThemeKey): void => {
    setTheme(key);
    handleClose();
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Tooltip title='Switch theme'>
        <IconButton
          onClick={handleOpen}
          aria-label='Switch theme'
          size='small'
          sx={{ color: 'nav.text', ml: 1 }}>
          <PaletteOutlinedIcon fontSize='small' />
        </IconButton>
      </Tooltip>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        slotProps={{
          paper: {
            sx: {
              bgcolor: 'background.paper',
              border: '1px solid',
              borderColor: 'divider',
              borderRadius: 2,
              p: 1.5,
              mt: 0.5,
            },
          },
        }}>
        <Typography
          variant='caption'
          sx={{
            display: 'block',
            mb: 1,
            color: 'text.secondary',
            textTransform: 'uppercase',
            letterSpacing: 1,
            px: 0.5,
          }}>
          Choose theme
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0.75,
          }}>
          {THEME_KEYS.map(key => {
            const swatch = themeSwatchColors[key];
            const isActive = resolvedTheme === key;
            return (
              <Tooltip key={key} title={themeLabels[key]} placement='top'>
                <Box
                  component='button'
                  onClick={() => handleSelect(key)}
                  aria-label={themeLabels[key]}
                  sx={{
                    width: 28,
                    height: 28,
                    borderRadius: '50%',
                    background: swatch.bg,
                    border: isActive ? `3px solid ${swatch.border}` : '2px solid',
                    borderColor: isActive ? swatch.border : 'divider',
                    cursor: 'pointer',
                    outline: isActive ? `2px solid ${swatch.border}` : 'none',
                    outlineOffset: 1,
                    transition: 'transform 0.15s ease, outline 0.15s ease',
                    '&:hover': { transform: 'scale(1.15)' },
                    p: 0,
                  }}
                />
              </Tooltip>
            );
          })}
        </Box>
      </Popover>
    </>
  );
}
