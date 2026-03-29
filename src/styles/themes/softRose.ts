import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const softRoseTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#c0396b', contrastText: '#ffffff' },
    secondary: { main: '#fce4ec', contrastText: '#1a0a0f' },
    background: { default: '#fdf2f4', paper: '#ffffff' },
    text: { primary: '#1a0a0f', secondary: '#8a4060' },
    nav: {
      bg: 'rgba(26,10,15,0.96)',
      text: '#ffffff',
      drawerBg: '#1a0a0f',
    },
    welcome: {
      overlayBg: 'rgba(26,10,15,0.93)',
      titleColor: '#fdf2f4',
      accentColor: '#f08fac',
      buttonBg: '#1a0a0f',
      buttonHoverBg: '#2a1520',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default softRoseTheme;
