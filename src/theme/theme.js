import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: grey[900],
      contrastText: grey[200],
    },
    secondary: {
      main: grey[200],
      contrastText: grey[900],
    },
    background: {
      default: grey[800],
      footer: grey[900],
    },
    action: {
      visited: grey[200],
      hover: grey[200],
      active: grey[200],
    },
    header: {
      color: grey[900],
    },
    subtitle: {
      color: grey[500],
    },
    divider: {
      color: grey[200],
    },
  },
});

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: grey[200],
      contrastText: grey[900],
    },
    secondary: {
      main: grey[900],
      contrastText: grey[200],
    },
    background: {
      default: grey[200],
      footer: grey[300],
    },
    action: {
      visited: grey[900],
      hover: grey[900],
      active: grey[900],
    },
    header: {
      color: grey[200],
    },
    subtitle: {
      color: grey[600],
    },
    divider: {
      color: grey[900],
    },
  },
});
