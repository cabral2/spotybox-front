import React from 'react';
import Image from 'next/image';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import { makeStyles } from '@mui/styles';

import defaultProfile from '../../assets/pictures/profile-1.jpg';
import ButtonSpoty from '../button';
import { height } from '@mui/system';

const useStyles = makeStyles((theme) => {
  return {
    box: {
      width: '100%',
      marginTop: '1.5rem',
    },
    picture: {
      borderRadius: '50%',
      width: '5rem',
      height: '5rem',
    },
    text: {
      color: theme?.palette?.primary?.contrastText,
    },
    name: {
      color: theme?.palette?.primary?.contrastText,
    },
    description: {
      color: theme?.palette?.subtitle?.color,
    },
  };
});

export default function UserCard(props) {
  const styles = useStyles();
  const imageUrl = props.imageUrl || defaultProfile;

  let type = null;
  if (props.unfollow) type = { unfollow: true };
  if (props.blockUser) type = { blockUser: true };
  if (props.unblockUser) type = { unblockUser: true };

  return (
    <Box className={styles.box}>
      <Grid container alignItems="center" spacing={1}>
        <Grid item xs={2}>
          <CardMedia className={styles.picture} component="img" image={imageUrl} />
        </Grid>
        <Grid item xs={6}>
          <Typography className={styles.text}>
            <span className={styles.name}>{props.name}</span>
            {' - '}
            <span>{props.location}</span>
          </Typography>
          <Typography className={styles.description}>{props.description}</Typography>
        </Grid>
        <Grid item xs={4}>
          <ButtonSpoty {...type} onClick={props.onClick} />
        </Grid>
      </Grid>
    </Box>
  );
}
