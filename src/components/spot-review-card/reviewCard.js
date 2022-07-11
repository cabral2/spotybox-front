import { CardMedia, Divider, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: '1rem',
      backgroundColor: theme?.palette?.background?.default,
    },
    cardHeader: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: '1rem',
      width: '100%',
    },
    cardReview: {
      marginTop: '1rem',
    },
    cardMedia: {
      height: '70px',
      width: '70px',
    },
    albumName: {
      fontWeight: 'bold',
      width: '100%',
    },
    artistName: {
      color: theme?.palette?.subtitle?.color,
      width: '100%',
    },
    reviewDescription: {
      wordWrap: 'break-word',
      color: theme?.palette?.subtitle?.color,
    },
    divider: {
      color: theme?.palette?.divider?.color,
    },
    reviewDetails: {
      width: '100%',
    },
  };
});

export default function ReviewCard({ reviewTitle, reviewerName, reviewDescription, profilePhoto }) {
  const classes = useStyles();

  return (
    <>
      <div className={classes.cardContainer}>
        <Box className={classes.cardHeader}>
          <CardMedia
            className={classes.cardMedia}
            component="img"
            image={profilePhoto}
            height="70px"
            width="70px"
          ></CardMedia>
          <Box className={classes.reviewDetails}>
            <Typography className={classes.albumName} color="secondary">
              {reviewTitle}
            </Typography>
            <Typography className={classes.artistName}>{reviewerName}</Typography>
          </Box>
        </Box>
        <Box className={classes.cardReview}>
          <Typography variant="body2" gutterBottom className={classes.reviewDescription}>
            {reviewDescription}
          </Typography>
        </Box>
      </div>
      <Divider className={classes.divider} />
    </>
  );
}
