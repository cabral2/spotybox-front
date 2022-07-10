import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import { Button, Paper, Typography } from '@mui/material';
import Link from 'next/link';

import { makeStyles } from '@mui/styles';

import AlbumCard from '../../components/spot-album-card/albumCard';

const userStyles = makeStyles({
  container: {
    width: '100%',
  },
  paper: {
    backgroundImage: `url('https://raw.githubusercontent.com/cabral2/spotybox-front/main/src/assets/pictures/capa.jpg')`,
    backgroundPosition: 'center',
    height: 300,
    // width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
  },
  phrase: {
    textAlign: 'center',
    fontWeight: 300,
  },
  button: {
    backgroundColor: '#027C00',
    fontSize: 20,
    width: 400,
    '&:hover': {
      backgroundColor: '#025000',
    },
  },
});

const Phrase = (props) => {
  const styles = userStyles();
  return (
    <Grid item xs={4}>
      <Typography className={styles.phrase} color="secondary" variant="h4">
        {props.phrase}
      </Typography>
    </Grid>
  );
};

const ListAlbums = ({ userFavoriteAlbuns }) => {
  return (
    <Grid container spacing={2}>
      {userFavoriteAlbuns.map((album, index) => (
        <Grid item key={index}>
          <AlbumCard title={album.name} albumName={album.artist} image={album.image} date={album.date} />
        </Grid>
      ))}
    </Grid>
  );
};


export default function HomePage(props) {
  const styles = userStyles();
  const [userFavoriteAlbuns, setFavoriteAlbuns] = useState([]);

  const getSeveralAlbuns = async () => {
    const client_id = 'e34d88ebda334b2c8fcac5fd7f03ca16';
    const client_secret = '0f8d9746394c47c39e1c15878ce2eb42';

    const authOptions = {
      method: 'post',
      url: 'https://accounts.spotify.com/api/token',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Authorization': 'Basic ' + btoa(client_id + ':' + client_secret)
      },
      data: 'grant_type=client_credentials',
    };

    axios(authOptions)
      .then(function (response) {
        const access_token = response.data.access_token;

        const config = {
          method: 'get',
          url: 'https://api.spotify.com/v1/albums?ids=3THs8EgoGs9oSKahSlN4yP%2C2u5rfCD13KFohXHVteFx0Z%2C347XTcjmkfhb8kDLaMphpv%2C5risYG7klZCSLMNxB9dZhf%2C4mywaTqTdSJUikLyiVqjjX%2C4m2880jivSbbyEGAKfITCa%2C2noRn2Aes5aoNVsU6iWThc&market=ES',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization:
              `Bearer ${access_token}`,
          },
        };

        axios(config)
          .then(function (response) {
            const albuns = response.data.albums;

            albuns.forEach((album) => {
              const albumName = album.name;
              const artistName = album.artists[0].name;
              const albumImage = album.images[0].url;
              const albumDate = album.release_date;

              setFavoriteAlbuns((currentAlbuns) => {
                return [...currentAlbuns, {
                  name: albumName,
                  artist: artistName,
                  image: albumImage,
                  date: albumDate,
                }];
              });
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      })
      .catch(function (error) {
        console.log(error);
      })
  };

  useEffect(() => {
    if (userFavoriteAlbuns.length === 0) {
      getSeveralAlbuns();
    }
  }, [userFavoriteAlbuns]);

  return (
    <Fragment>
      <Grid container spacing={4} direction="column" justifyContent="center" alignItems="center">
        <Grid item className={styles.container}>
          <Paper className={styles.paper}>
            <Grid container spacing={5} direction="row" justifyContent="center" alignItems="center">
              <Phrase phrase="Follow albums you’ve listened." />
              <Phrase phrase="Save those you want to listen." />
              <Phrase phrase="Tell your friends what’s good." />
              <Grid item>
                <Link href="/create-account">
                  <Button className={styles.button} color="secondary">
                    Get Started - Its Free
                  </Button>
                </Link>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item>
          <Typography className={styles.phrase} color="secondary" variant="h5">
            The social network for music lovers
          </Typography>
        </Grid>
        <Grid item>
          <ListAlbums userFavoriteAlbuns={userFavoriteAlbuns} />
        </Grid>
      </Grid>
    </Fragment>
  );
}
