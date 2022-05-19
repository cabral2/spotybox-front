import React from "react";

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

const userStyles = makeStyles({
  footer: {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    bottom: 0,
    height: 70,
    width: '100%',
    backgroundColor: 'black',
    color: 'rgba(255, 255, 255, .6)',
  },
  text: {
    paddingLeft: 20,
    fontWeight: 300,
  }
}); 

export default function Footer() {
  const styles = userStyles();
  const textFooter = '© SpotyBox Limited. Made by ❤️ d1sn3y';

	return(
	  <Box className={styles.footer}>
	    <Typography className={styles.text} variant="subtitle2">
        {textFooter}
      </Typography>
	  </Box>
	);
}