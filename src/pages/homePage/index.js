import React, { Fragment, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { Button, Paper, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

import AlbumCard from "../../components/spot-album-card/albumCard";

const userFavoriteAlbuns = [];

const getSeveralAlbuns = async () => {
  const config = {
    method: 'get',
    url: 'https://api.spotify.com/v1/albums?ids=3THs8EgoGs9oSKahSlN4yP%2C2u5rfCD13KFohXHVteFx0Z%2C347XTcjmkfhb8kDLaMphpv%2C5risYG7klZCSLMNxB9dZhf%2C4mywaTqTdSJUikLyiVqjjX%2C4m2880jivSbbyEGAKfITCa%2C2noRn2Aes5aoNVsU6iWThc&market=ES',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer BQDEkqM5blbIgFwmUyq9if42Y_qpQZyzlLrXWBbL2yw_utF8mxv8HiS5KiCJ9ztk8gNps2J9sCiIpR6B_Mx_oi2DZAmP48DbsOdJLH_XWTgWrraKtRv49WwwiEX74umDpIeDD067kkHGOPMQC3IJBqgO2Nga1ZuXIMnXxe5TDyXRtx_lh_a_MIEI9L7lvhdd5yw'
    }
  };

  axios(config)
    .then(function (response) {
      const albuns = response.data.albums;

      albuns.forEach((album) => {
        const albumName = album.name;
        const artistName = album.artists[0].name;
        const albumImage = album.images[0].url;
        const albumDate = album.release_date;

        userFavoriteAlbuns.push({
          name: albumName,
          artist: artistName,
          image: albumImage,
          date: albumDate
        });
      });
    })
    .catch(function (error) {
      console.log(error);
    });
}

const userStyles = makeStyles({
  container: {
    width: "100%",
  },
  paper: {
    backgroundImage: `url('https://raw.githubusercontent.com/cabral2/spotybox-front/main/src/assets/pictures/capa.jpg')`,
    backgroundPosition: "center",
    height: 300,
    // width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  phrase: {
    textAlign: "center",
    fontWeight: 300,
  },
  button: {
    backgroundColor: "#027C00",
    fontSize: 20,
    width: 400,
    "&:hover": {
      backgroundColor: "#025000",
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

const ListAlbums = () => {
  return (
    <Grid container spacing={2}>
      {userFavoriteAlbuns.map((album, index) => (
        <Grid item key={index}>
          <AlbumCard
            title={album.name}
            albumName={album.artist}
            image={album.image}
            date={album.date}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default function HomePage(props) {
  const styles = userStyles();

  useEffect(() => {
    getSeveralAlbuns();
  }, []);

  return (
    <Fragment>
      <Grid
        container
        spacing={4}
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item className={styles.container}>
          <Paper className={styles.paper}>
            <Grid
              container
              spacing={5}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <Phrase phrase="Follow albums you’ve listened." />
              <Phrase phrase="Save those you want to listen." />
              <Phrase phrase="Tell your friends what’s good." />
              <Grid item>
                <Button className={styles.button} color="secondary">
                  Get Started - Its Free
                </Button>
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
          <ListAlbums />
        </Grid>
      </Grid>
    </Fragment>
  );
}
