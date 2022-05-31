import React, { Fragment } from "react";

import Grid from "@mui/material/Grid";
import { Button, Paper, Typography } from "@mui/material";

import { makeStyles } from "@mui/styles";

import AlbumCard from "../../components/spot-album-card/albumCard";

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
          />
        </Grid>
      ))}
    </Grid>
  );
};

const userFavoriteAlbuns = [
  {
    name: "Stadium Arcadium",
    artist: "Red hot Chili Peppers",
    image: "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg",
  },
  {
    name: "Clube da Esquina",
    artist: "Milton Nascimento",
    image: "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg",
  },
  {
    name: "Heresia",
    artist: "Djonga",
    image: "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg",
  },
  {
    name: "Manual",
    artist: "Boogarins",
    image: "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg",
  },
  {
    name: "Manual",
    artist: "Boogarins",
    image: "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg",
  },
  {
    name: "Manual",
    artist: "Boogarins",
    image: "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg",
  },
  {
    name: "Manual",
    artist: "Boogarins",
    image: "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg",
  },
];

export default function HomePage(props) {
  const styles = userStyles();

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
