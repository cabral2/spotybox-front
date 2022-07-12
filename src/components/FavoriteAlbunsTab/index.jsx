import AlbumCard from "../spot-album-card/albumCard";
import { makeStyles } from '@mui/styles';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";

const useStyles = makeStyles({
  favoriteContainer: {
    display: 'flex',
    flexGrow: '1',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '1rem',
    marginLeft: '-3.5rem',
    marginTop: '1rem',
    flexWrap: 'wrap',
  }
});

export default function FavoriteAlbunsTab() {
  const classes = useStyles();
  const [userFavoriteAlbuns, setUserFavoriteAlbuns] = useState([]);

  const getSeveralAlbuns = async (albums_ids) => {
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
          url: `https://api.spotify.com/v1/albums?ids=${albums_ids}&market=ES`,
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
              const albumId = album.id;

              setUserFavoriteAlbuns((currentAlbuns) => {
                return [...currentAlbuns, {
                  name: albumName,
                  artist: artistName,
                  image: albumImage,
                  date: albumDate,
                  id: albumId,
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
  }

  const handleUser = async () => {
    let baseURL =
      process.env.NEXT_PUBLIC_URL_API + 'user/email?email=' + Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const user = await axios
      .get(baseURL)
      .then((response) => response.data[0])
      .catch((error) => console.error(error.message));

    return user;
  };

  const getFavorites = async () => {
    const user = await handleUser();
    let baseURL = process.env.NEXT_PUBLIC_URL_API + 'favorites/user';
    await axios
      .get(baseURL, { params: { id: user.id } })
      .then((response) => response.data)
      .then((data) => {
        const albums_ids = data.map((favorite) => favorite.album_id);
        const albums_ids_string = albums_ids.join(',');
        getSeveralAlbuns(albums_ids_string);
      })
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    if (userFavoriteAlbuns.length === 0) {
      getFavorites();
    }
  }, [userFavoriteAlbuns]);

  return (
    <div className={classes.favoriteContainer}>
      {userFavoriteAlbuns.map((album, index) => (
        <AlbumCard
          key={index}
          title={album.name}
          albumName={album.artist}
          image={album.image}
          date={album.date}
          id={album.id}
        />
      ))}
    </div>
  );
}
