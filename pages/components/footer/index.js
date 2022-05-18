import React from "react";
import Typography from '@mui/material/Typography';
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  footer: {
		position: 'fixed',
		display: 'flex',
		justifyContent: 'start',
		alignItems: 'center',
		bottom: '0%',
  	height: '60px',
		width: '100%',
		backgroundColor: '#000',
		paddingLeft: 20,
  },
	textFooter: {
		color: 'white',
	}
});

export default function Footer() {
  const styles = useStyles();
	const textFooter = '© SpotyBox Limited. Made by ❤️ d1sn3y';

  return(
    <div className={styles.footer}>
			<Typography className={styles.textFooter} variant='subtitle2'>
				{textFooter}
			</Typography>
    </div>
  );
}