import React from "react";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import { useAppThemeContext } from "../../theme/ThemeContext";

const userStyles = makeStyles({
  footer: {
    position: "fixed",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    bottom: 0,
    left: 0,
    height: "11vh",
    width: "100%",
  },
  text: {
    paddingLeft: 20,
    fontWeight: 300,
  },
});

export default function Footer() {
  const styles = userStyles();
  const textFooter = "© SpotyBox Limited. Made by ❤️ d1sn3y";
  const { theme } = useAppThemeContext();
  return (
    <Box className={styles.footer} bgcolor={theme?.palette?.background?.footer}>
      <Typography className={styles.text} variant="subtitle2" color="secondary">
        {textFooter}
      </Typography>
    </Box>
  );
}
