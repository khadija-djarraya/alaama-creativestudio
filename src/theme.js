import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#ff3131', // your fixed primary color
    },
    salmon: {
      main: '#FF6F61', // example secondary color
    },
    journal_white: {
        main: '#F1F1E8', // example custom color
    },
    yello: {
      default: '#bbd6e6',
    },
  },
  typography: {
    // customize fonts if you want
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});

export default theme;
