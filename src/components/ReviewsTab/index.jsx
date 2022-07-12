import { makeStyles } from '@mui/styles';
import { Divider } from "@mui/material";
import ReviewCard from '../spot-review-card/reviewCard';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import axios from "axios";

const useStyles = makeStyles((theme) => {
  return {
    favoriteContainer: {
      display: 'flex',
      flexGrow: '1',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      gap: '1rem',
      marginLeft: '-3.5rem',
      marginTop: '1rem',
    },
    divider: {
      color: theme?.palette?.divider?.color,
      width: '100%',
    },
  }
});

export default function ReviewsTab() {
  const classes = useStyles();
  const [userReviews, setUserReviews] = useState([]);

  const handleUser = async () => {
    let baseURL =
      process.env.NEXT_PUBLIC_URL_API + 'user/email?email=' + Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const user = await axios
      .get(baseURL)
      .then((response) => response.data[0])
      .catch((error) => console.error(error.message));

    return user;
  };

  const getReviews = async () => {
    const user = await handleUser();
    let baseURL = process.env.NEXT_PUBLIC_URL_API + 'review/user/' + user.id;

    const reviews = await axios
      .get(baseURL)
      .then((response) => response.data)
      .catch((err) => console.error(err.message));

    if (reviews) {
      reviews.forEach((review) => {
        const client_id = 'e34d88ebda334b2c8fcac5fd7f03ca16';
        const client_secret = '0f8d9746394c47c39e1c15878ce2eb42';
        const description = review.review;
        const albumId = review.album_id;
        let albumName = '';
        let artistName = '';
        let albumPhoto = '';

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
              url: `https://api.spotify.com/v1/albums?ids=${albumId}&market=ES`,
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:
                  `Bearer ${access_token}`,
              },
            };

            axios(config)
              .then(function (response) {
                const album = response.data.albums[0];
                albumName = album.name;
                artistName = album.artists[0].name;
                albumPhoto = album.images[0].url;

                setUserReviews((currentReview) => {
                  return [...currentReview, {
                    reviewTitle: albumName,
                    reviewerName: artistName,
                    reviewDescription: description,
                    profilePhoto: albumPhoto,
                  }];
                });
              })
              .catch(function (error) {
                console.log(error);
              });
          })
          .catch(function (error) {
            console.log(error);
          })
      })
    }
  };

  useEffect(() => {
    if (userReviews.length === 0) {
      getReviews();
    }
  }, [userReviews]);

  return (
    <div className={classes.favoriteContainer}>
      {userReviews.map((review, index) => (
        <>
          <ReviewCard
            key={index}
            reviewTitle={review.reviewTitle}
            reviewerName={review.reviewerName}
            reviewDescription={review.reviewDescription}
            profilePhoto={review.profilePhoto}
          />
          <Divider className={classes.divider} />
        </>
      ))}
    </div>
  );
}
