import { makeStyles } from '@mui/styles';
import {
  TextField,
  Typography,
  CardMedia,
  Divider,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Button,
} from '@mui/material';
import ReviewCard from '../../components/spot-review-card/reviewCard';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';
import { get, post } from '../../api-consumer';
import Cookies from 'js-cookie';
import axios from 'axios';

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: '5vh 15vw 5vh 15vw',
    },
    topContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    bottomContainer: {
      paddingTop: '1rem',
    },
    reviewsContainer: {
      width: '90%',
      margin: 'auto',
    },
    imageCard: {
      width: '15rem',
      height: '15rem',
    },
    flex: {
      display: 'flex',
    },
    albumInfos: {
      padding: '1rem 2rem',
    },
    subtitle: {
      color: theme?.palette?.subtitle?.color,
    },
    buttonsContainer: {
      width: '8rem',
      height: '4rem',
      backgroundColor: theme?.palette?.subtitle?.color,
      borderRadius: '10px',
      display: 'flex',
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    divider: {
      color: theme?.palette?.divider?.color,
    },
    icons: {
      cursor: 'pointer',
      color: theme?.palette?.primary?.main,
    },
    dialogContentContainer: {
      width: '30vw',
    },
    dialogPaper: {
      backgroundColor: theme?.palette?.primary?.main,
    },
    reviewInput: {
      color: theme?.palette?.primary?.contrastText,
    },
    dialogTextField: {
      width: '100%',
    },
    favoriteAlbumIcon: {
      cursor: 'pointer',
      color: '#ba0c00',
    },
  };
});

export default function Albuns() {
  const classes = useStyles();
  const [albumTitle, setAlbumTitle] = useState();
  const [albumAuthor, setAlbumAuthor] = useState();
  const [imageLink, setImageLink] = useState();
  const [albumDate, setAlbumDate] = useState();
  const [open, setOpen] = useState(false);
  const [reviewInput, setReviewInput] = useState('');
  const [albumId, setAlbumId] = useState();
  const [userData, setUserData] = useState();
  const [albumReviews, setAlbumReviews] = useState([]);
  const [albumFavorite, setAlbumFavorite] = useState(false);

  const handleReviewInputChange = (ev) => {
    setReviewInput(ev.target.value);
  };

  const handleReviewClick = () => {
    setOpen(true);
  };

  const handleClose = (_, reason) => {
    if (reason && reason == 'backdropClick') return;
    setOpen(false);
    setReviewInput('');
  };

  const handleSubmit = async () => {
    if (!albumId || !userData || !userData.id) return;

    await post('review', { userId: userData.id, albumId: albumId, review: reviewInput });
    setAlbumReviews((await get(`review/album/${albumId}`)) ?? []);
    setOpen(false);
    setReviewInput('');
  };

  const handleUser = async () => {
    let baseURL =
      process.env.NEXT_PUBLIC_URL_API + 'user/email?email=' + Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const user = await axios
      .get(baseURL)
      .then((response) => response.data[0])
      .catch((error) => console.error(error.message));

    return user;
  };

  const handleFavorite = async () => {
    const user = await handleUser();
    let baseURL = process.env.NEXT_PUBLIC_URL_API + `favorites/user_favorite?user_id=${user.id}&album_id=${albumId}`;
    const album = await axios
      .get(baseURL)
      .then((response) => response.data)
      .catch((err) => console.error(err.message));
    if (album) {
      setAlbumFavorite(true);
    }
  };

  const markAsFavoriteAlbum = async () => {
    const user = await handleUser();
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'favorites';
    await axios.post(baseURL, { userId: user.id, albumId: albumId });
  };

  const markOffAsFavoriteAlbum = async () => {
    const user = await handleUser();
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'favorites';
    try {
      await axios.delete(baseURL, { data: { userId: user.id, albumId: albumId } });
    } catch (error) {
      return console.error(error.message);
    }
  };

  const changeFavoriteAlbum = () => {
    if (!albumFavorite) {
      markAsFavoriteAlbum();
      setAlbumFavorite(true);
    } else {
      markOffAsFavoriteAlbum();
      setAlbumFavorite(false);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAlbumTitle(params.get('title'));
    setAlbumAuthor(params.get('albumName'));
    setImageLink(params.get('image'));
    setAlbumDate(params.get('albumDate'));
    setAlbumId(params.get('id'));

    const handleGetUserData = async () => {
      const userEmail = Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
      const data = await get('user/email', { email: userEmail });
      setUserData(data ? data[0] : null);
    };

    handleGetUserData();
    handleFavorite();
  }, []);

  useEffect(() => {
    const handleGetAlbumReviews = async () => {
      if (albumId) setAlbumReviews((await get(`review/album/${albumId}`)) ?? []);
    };

    handleGetAlbumReviews();
  }, [albumId]);

  useEffect(() => {
    handleFavorite();
  }, [albumId]);

  const userReviews = [
    {
      reviewTitle: 'teste1',
      reviewerName: 'Savinho',
      reviewDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      profilePhoto: 'https://www.vagalume.com.br/djonga/discografia/heresia.jpg',
    },
    {
      reviewTitle: 'teste2',
      reviewerName: 'Davizao',
      reviewDescription:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      profilePhoto: 'https://www.vagalume.com.br/boogarins/discografia/manual.jpg',
    },
    {
      reviewTitle: 'teste3',
      reviewerName: 'Iuryzao',
      reviewDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
      profilePhoto: 'https://www.vagalume.com.br/gusttavo-lima/discografia/o-embaixador.jpg',
    },
  ];

  return (
    <>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{ className: classes.dialogPaper }}
      >
        <DialogTitle id="alert-dialog-title" color={'secondary'}>
          {'Review'}
        </DialogTitle>
        <DialogContent className={classes.dialogContentContainer}>
          <TextField
            id="outlined-multiline-flexible"
            color="secondary"
            variant="outlined"
            focused
            multiline
            maxRows={4}
            rows={4}
            value={reviewInput}
            onChange={handleReviewInputChange}
            inputProps={{ className: classes.reviewInput }}
            className={classes.dialogTextField}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color={'secondary'}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} color={'secondary'}>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <div className={classes.container}>
        <div className={classes.topContainer}>
          <div className={classes.flex}>
            <CardMedia className={classes.imageCard} component="img" image={imageLink} />
            <div className={classes.albumInfos}>
              <Typography color="secondary">{albumTitle}</Typography>
              <Typography className={classes.subtitle}>
                {albumAuthor} - {albumDate}
              </Typography>
            </div>
          </div>
          <div className={classes.buttonsContainer}>
            <FavoriteIcon
              fontSize="large"
              className={albumFavorite ? classes.favoriteAlbumIcon : classes.icons}
              onClick={changeFavoriteAlbum}
            />
            <EditIcon fontSize="large" className={classes.icons} onClick={handleReviewClick} />
          </div>
        </div>
        <div className={classes.bottomContainer}>
          <Typography className={classes.divider}>Reviews</Typography>
          <Divider className={classes.divider} />
          <div className={classes.reviewsContainer}>
            {albumReviews.map((review, index) => (
              <ReviewCard
                key={index}
                reviewTitle={`${review.first_name} ${review.last_name}`}
                reviewerName={review.localization}
                reviewDescription={review.review}
                profilePhoto={'https://www.vagalume.com.br/boogarins/discografia/manual.jpg'}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
