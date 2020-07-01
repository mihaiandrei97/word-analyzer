import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  colors: {
    main: '#512da8',
    areaColor: '#fff',
    footerColor: '#212121',
  },
  areaSize: {
    width: '600px',
    height: '640px',
  },
  palette: {
    primary: {
      main: '#512da8',
    },
    secondary: {
      main: '#b2102f',
    },
  },
});

export const darkTheme = createMuiTheme({
  colors: {
    main: '#212121',
    areaColor: '#9E9E9E',
    footerColor: '#fff',
  },
  areaSize: {
    width: '600px',
    height: '640px',
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#1d1c1c',
    },
    secondary: {
      main: '#455A64',
    },
  },
});
