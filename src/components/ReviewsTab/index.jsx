import { makeStyles } from '@mui/styles';
import { Divider } from "@mui/material";
import ReviewCard from '../spot-review-card/reviewCard';

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
