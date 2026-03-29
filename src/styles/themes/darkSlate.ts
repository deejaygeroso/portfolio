import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const darkSlateTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#38bdf8', contrastText: '#0f172a' },
    secondary: { main: '#1e293b', contrastText: '#e2e8f0' },
    background: { default: '#0f172a', paper: '#1e293b' },
    text: { primary: '#e2e8f0', secondary: '#94a3b8' },
    nav: {
      bg: 'rgba(15,23,42,0.96)',
      text: '#e2e8f0',
      drawerBg: '#1e293b',
    },
    welcome: {
      overlayBg: 'rgba(15,23,42,0.92)',
      titleColor: '#e2e8f0',
      accentColor: '#38bdf8',
      buttonBg: '#1e293b',
      buttonHoverBg: '#263348',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default darkSlateTheme;
