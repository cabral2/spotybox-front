import React from "react";
import Image from 'next/image'

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";

import defaultProfile from './profile-1.jpg';
import ButtonSpoty from "../button";

const useStyles = makeStyles({
  box:{
    width: 700
  },
  picture:{
    borderRadius: 50
  },
  text:{
    color: 'white',
  },
  name: {
    color: 'white',
    fontSize: 22,
  },
  description:{
    color: '#7D7D7D',
    fontSize: 18,
  }
});


export default function UserCard(props) {
  const styles = useStyles();
  const imageUrl = props.imageUrl || defaultProfile;

  let type = null;
  if (props.unfollow) type = {unfollow: true}
  if (props.blockUser) type = {blockUser: true}

  return(
    <Box className={styles.box}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={2}>
          <Image className={styles.picture} src={imageUrl} alt="Image profile" width={100} height={100}/>
        </Grid>
        <Grid item xs={6}>
          <Typography className={styles.text}>
            <span className={styles.name}>{props.name}</span>
            {" - "}
            <span>{props.location}</span>
          </Typography>
          <Typography className={styles.description}>
            {props.description}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <ButtonSpoty {...type}/>
        </Grid>   
      </Grid>
    </Box>
  );
}