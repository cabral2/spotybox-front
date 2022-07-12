import { CardActionArea } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';

const useStyles = makeStyles((theme) => {
  return {
    cardContainer: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      width: '16rem',
      height: '16rem',
      borderRadius: '0.7rem',
      backgroundColor: theme?.palette?.primary?.main,
    },
    cardMedia: {
      height: '10rem',
      width: '100%',
    },
    cardContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      width: '100%',
      height: '10rem',
      overflow: 'hidden',
    },
    subtitle: {
      color: theme?.palette?.subtitle?.color,
    },
  };
});

export default function AlbumCard({ title, albumName, image, date, id }) {
  const classes = useStyles();

  return (
    <Link href={`/albuns?title=${title}&albumName=${albumName}&image=${image}&albumDate=${date}&id=${id}`}>
      <Card className={classes.cardContainer}>
        <CardActionArea>
          <CardMedia className={classes.cardMedia} component="img" image={image} />
          <CardContent className={classes.cardContent}>
            <Typography
              color="secondary"
              letterSpacing="0.1rem"
            >
              {title}
            </Typography>
            <Typography color="secondary" letterSpacing="0.1rem" className={classes.subtitle}>
              {albumName}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
