import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      contrastText: grey[50],
    },
    secondary: {
      main: grey[50],
      contrastText: grey[900],
    },
    background: {
      default: grey[800],
      footer: grey[900],
    },
    action: {
      visited: grey[50],
      hover: grey[50],
      active: grey[50],
    },
    header: {
      color: grey[900],
    },
  },
});

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: grey[50],
      contrastText: grey[900],
    },
    secondary: {
      main: grey[900],
      contrastText: grey[50],
    },
    background: {
      default: grey[50],
      footer: grey[300],
    },
    action: {
      visited: grey[900],
      hover: grey[900],
      active: grey[900],
    },
    header: {
      color: grey[50],
    },
  },
});
