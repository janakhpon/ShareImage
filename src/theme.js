import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#2ec4b6',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#011627',
    },
    text: {
      default: '#fdfffc',
    },
    textColor: '#fdfffc',
  },
  root: {
    textDecoration: 'none',
  },
});


export default theme;
