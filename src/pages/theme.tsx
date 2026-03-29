import { createTheme } from '@mui/material/styles';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1b75d2',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#d2f5ff',
      contrastText: '#171a1c',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#171a1c',
      secondary: '#64748B',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
});

export default theme;
