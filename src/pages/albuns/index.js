import { makeStyles } from "@mui/styles";
import { TextField, Typography, CardMedia, Divider } from "@mui/material";
import ReviewCard from "../../components/spot-review-card/reviewCard";
import FavoriteIcon from "@mui/icons-material/Favorite";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => {
  return {
    container: {
      padding: "5vh 15vw 5vh 15vw",
    },
    topContainer: {
      display: "flex",
      justifyContent: "space-between",
    },
    bottomContainer: {
      paddingTop: "1rem",
    },
    reviewsContainer: {
      width: "90%",
      margin: "auto",
    },
    imageCard: {
      width: "15rem",
      height: "15rem",
    },
    flex: {
      display: "flex",
    },
    albumInfos: {
      padding: "1rem 2rem",
    },
    subtitle: {
      color: theme?.palette?.subtitle?.color,
    },
    buttonsContainer: {
      width: "8rem",
      height: "4rem",
      backgroundColor: theme?.palette?.subtitle?.color,
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-evenly",
      alignItems: "center",
    },
    divider: {
      color: theme?.palette?.divider?.color,
    },
    icons: {
      cursor: "pointer",
      color: theme?.palette?.primary?.main,
    },
  };
});

export default function Albuns() {
  const classes = useStyles();
  const [albumTitle, setAlbumTitle] = useState();
  const [albumAuthor, setAlbumAuthor] = useState();
  const [imageLink, setImageLink] = useState();
  const [albumDate, setAlbumDate] = useState();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setAlbumTitle(params.get("title"));
    setAlbumAuthor(params.get("albumName"));
    setImageLink(params.get("image"));
    setAlbumDate(params.get("albumDate"));
  }, [albumAuthor, albumDate, albumTitle, imageLink]);

  const userReviews = [
    {
      reviewTitle: "teste1",
      reviewerName: "Savinho",
      reviewDescription:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
      profilePhoto:
        "https://www.vagalume.com.br/djonga/discografia/heresia.jpg",
    },
    {
      reviewTitle: "teste2",
      reviewerName: "Davizao",
      reviewDescription:
        'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.',
      profilePhoto:
        "https://www.vagalume.com.br/boogarins/discografia/manual.jpg",
    },
    {
      reviewTitle: "teste3",
      reviewerName: "Iuryzao",
      reviewDescription:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable",
      profilePhoto:
        "https://www.vagalume.com.br/gusttavo-lima/discografia/o-embaixador.jpg",
    },
  ];

  return (
    <div className={classes.container}>
      <div className={classes.topContainer}>
        <div className={classes.flex}>
          <CardMedia
            className={classes.imageCard}
            component="img"
            image={imageLink}
          />
          <div className={classes.albumInfos}>
            <Typography color="secondary">{albumTitle}</Typography>
            <Typography className={classes.subtitle}>
              {albumAuthor} - {albumDate}
            </Typography>
          </div>
        </div>
        <div className={classes.buttonsContainer}>
          <FavoriteIcon fontSize="large" className={classes.icons} />
          <EditIcon fontSize="large" className={classes.icons} />
        </div>
      </div>
      <div className={classes.bottomContainer}>
        <Typography className={classes.divider}>Reviews</Typography>
        <Divider className={classes.divider} />
        <div className={classes.reviewsContainer}>
          {userReviews.map((review, index) => (
            <ReviewCard
              key={index}
              reviewTitle={review.reviewTitle}
              reviewerName={review.reviewerName}
              reviewDescription={review.reviewDescription}
              profilePhoto={review.profilePhoto}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
