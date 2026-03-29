import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const warmCreamTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#c2651a', contrastText: '#ffffff' },
    secondary: { main: '#f5dcc8', contrastText: '#2d2013' },
    background: { default: '#fdf6ec', paper: '#ffffff' },
    text: { primary: '#2d2013', secondary: '#8a6a4a' },
    nav: {
      bg: 'rgba(45,32,19,0.96)',
      text: '#ffffff',
      drawerBg: '#2d2013',
    },
    welcome: {
      overlayBg: 'rgba(45,32,19,0.93)',
      titleColor: '#fdf6ec',
      accentColor: '#e8a87c',
      buttonBg: '#2d2013',
      buttonHoverBg: '#3d2d18',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default warmCreamTheme;
