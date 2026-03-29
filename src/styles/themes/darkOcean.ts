import { createTheme } from '@mui/material/styles';

import '@/styles/themeTypes';

const darkOceanTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#58a6ff', contrastText: '#0d1117' },
    secondary: { main: '#1b75d2', contrastText: '#ffffff' },
    background: { default: '#0d1117', paper: '#161b22' },
    text: { primary: '#c9d1d9', secondary: '#8b949e' },
    nav: {
      bg: 'rgba(13,17,23,0.96)',
      text: '#c9d1d9',
      drawerBg: '#161b22',
    },
    welcome: {
      overlayBg: 'rgba(13,17,23,0.92)',
      titleColor: '#c9d1d9',
      accentColor: '#58a6ff',
      buttonBg: '#161b22',
      buttonHoverBg: '#1c2128',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default darkOceanTheme;
