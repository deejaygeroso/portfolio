import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const arcticMintTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#0e8a94', contrastText: '#ffffff' },
    secondary: { main: '#b8e8ed', contrastText: '#0a2025' },
    background: { default: '#f0fafb', paper: '#ffffff' },
    text: { primary: '#0a2025', secondary: '#4a8a90' },
    nav: {
      bg: 'rgba(10,32,37,0.96)',
      text: '#ffffff',
      drawerBg: '#0a2025',
    },
    welcome: {
      overlayBg: 'rgba(10,32,37,0.93)',
      titleColor: '#f0fafb',
      accentColor: '#5ecdd6',
      buttonBg: '#0a2025',
      buttonHoverBg: '#0f2d33',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default arcticMintTheme;
