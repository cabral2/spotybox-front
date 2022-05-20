import { CardMedia, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    cardContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '70rem',
        height: '20rem',
        padding: '2rem',
        backgroundColor: '#3c3c43',
    },
    cardHeader: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: '1rem',
    },
    cardReview: {
        width: '70rem',
        height: '30rem',
        marginTop: '1rem',
    },
    cardMedia: {
        borderRadius: '0.7rem',
        border: '2px solid black',
    },
    albumName: {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        color: '#ffffff',
        letterSpacing: '0.1rem',
    },
    artistName: {
        fontSize: '1rem',
        fontFamily: 'Roboto',
        color: '#7D7D7D',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
    },
    reviewDescription: {
        color: '#ADADAD',
        fontFamily: 'Roboto',
        fontSize: '0.8rem',
        fontWeight: 'bold',
        letterSpacing: '0.1rem',
    }
});

export default function ReviewCard({ albumTitle, artistName, reviewDescription, reviewImage }) {
    const classes = useStyles();

    return (
        <Card className={classes.cardContainer}>
            <Box className={classes.cardHeader}>
                <CardMedia
                    className={classes.cardMedia}
                    component="img"
                    image={reviewImage}
                    height="100px"
                    width="100px"
                >
                </CardMedia>
                <Box>
                    <Typography
                        className={classes.albumName}
                        variant="h5"
                    >
                        {albumTitle}
                    </Typography>
                    <Typography
                        className={classes.artistName}
                        variant="h6"
                    >
                        {artistName}
                    </Typography>
                </Box>
            </Box>
            <Box className={classes.cardReview}>
                <Typography
                    variant="body2"
                    gutterBottom
                    className={classes.reviewDescription}
                >
                    {reviewDescription}
                </Typography>
            </Box>
        </Card>
    );
}
