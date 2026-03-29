import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1b75d2', contrastText: '#ffffff' },
    secondary: { main: '#d2f5ff', contrastText: '#171a1c' },
    background: { default: '#f5f5f5', paper: '#ffffff' },
    text: { primary: '#171a1c', secondary: '#64748B' },
    nav: {
      bg: 'rgba(23,26,28,0.96)',
      text: '#ffffff',
      drawerBg: '#171a1c',
    },
    welcome: {
      overlayBg: 'rgba(23,26,28,0.95)',
      titleColor: '#d2f5ff',
      accentColor: '#e31b6d',
      buttonBg: '#181b1e',
      buttonHoverBg: '#1f2326',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default lightTheme;
