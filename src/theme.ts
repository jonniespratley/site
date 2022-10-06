import { colors, createMuiTheme } from "@material-ui/core";

export const darkTheme = createMuiTheme({
  
  palette: {
    type: 'dark',
    primary: {
      main: '#222'
  },
  secondary: {
      main: '#111'
  },
  error: {
      main: colors.red.A400
  },
  
  },
  typography: {
    fontSize: 14,
  },

});

// Create a theme instance.
export const theme = createMuiTheme({
  palette: {
      primary: {
          main: '#666'
      },
      secondary: {
          main: '#333'
      },
      error: {
          main: colors.red.A400
      },
      background: {
          default: '#e9ecef'
      }
  },
  props: {
      MuiButtonBase: {
          disableRipple: true
      }
  }
});
