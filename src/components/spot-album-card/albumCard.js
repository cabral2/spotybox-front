import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: '16rem',
        height: '16rem',
        borderRadius: '0.7rem',
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
    }
});

export default function AlbumCard({ title, albumName, image }) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer}>
            <CardMedia
                className={classes.cardMedia}
                component="img"
                image={image}
            />
            <CardContent className={classes.cardContent}>
                <Typography
                    letterSpacing="0.1rem"
                    className="text-primary"
                >
                    {title}
                </Typography>
                <Typography
                    letterSpacing="0.1rem"
                    className="text-secondary"
                >
                    {albumName}
                </Typography>
            </CardContent>
        </Card>
    );
}
