import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    nav: {
      bg: string;
      text: string;
      drawerBg: string;
    };
    welcome: {
      overlayBg: string;
      titleColor: string;
      accentColor: string;
      buttonBg: string;
      buttonHoverBg: string;
    };
  }
  interface PaletteOptions {
    nav?: {
      bg?: string;
      text?: string;
      drawerBg?: string;
    };
    welcome?: {
      overlayBg?: string;
      titleColor?: string;
      accentColor?: string;
      buttonBg?: string;
      buttonHoverBg?: string;
    };
  }
}
