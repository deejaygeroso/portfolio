import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const lavenderMistTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#6d28d9', contrastText: '#ffffff' },
    secondary: { main: '#ede9fe', contrastText: '#1e1030' },
    background: { default: '#f5f3ff', paper: '#ffffff' },
    text: { primary: '#1e1030', secondary: '#6d5a8a' },
    nav: {
      bg: 'rgba(30,16,48,0.96)',
      text: '#ffffff',
      drawerBg: '#1e1030',
    },
    welcome: {
      overlayBg: 'rgba(30,16,48,0.93)',
      titleColor: '#f5f3ff',
      accentColor: '#a78bfa',
      buttonBg: '#1e1030',
      buttonHoverBg: '#2a1840',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default lavenderMistTheme;
