import { CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    body: {
        display: 'flex',
        flexDirection: 'row',
        gap: '5rem',
        width: '70rem'
    },
    infoSection: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '1rem',
    },
    infoFollower: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: '1rem',
        alignItems: 'center',
        marginTop: '2rem',
    },
    sectionNumber: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 'auto'
    },
    cardNumber: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        border: '3px solid #e6e6e6',
        borderRadius: '7px',
        padding: '5px',
        margin: '5px',
    },
    cardMedia: {
        width: "15rem",
        height: "15rem",
        borderRadius: '10rem',
        border: '3px solid #ffff',
    },
});

export default function ProfileHeader({ image, name, bio, city, numFollowers, numFollowing, numAlbums, numReviews }) {
    const classes = useStyles();

    return (
        <div className={classes.body}>
            <CardMedia
                className={classes.cardMedia}
                component="img"
                image={image}
            />
            <div className={classes.infoSection} >
                <Typography color="secondary" variant="h5">{name}</Typography>
                <Typography color="primary" variant="body1">{bio}</Typography>
                <Typography marginTop="-1rem" color="primary" variant="body1">{city}</Typography>
                <div className={classes.infoFollower}>
                    <Typography color="primary" variant="body1">{numFollowers}</Typography>
                    <Typography marginLeft="-0.8rem" color="primary" variant="body1">Followers</Typography>
                    <Typography color="primary" variant="body1">{numFollowing}</Typography>
                    <Typography marginLeft="-0.8rem" color="primary" variant="body1">Following</Typography>
                </div>
            </div>
            <div className={classes.sectionNumber}>
                <div className={classes.cardNumber}>
                    <Typography color="secondary" variant="body1">{numAlbums}</Typography>
                    <Typography color="secondary" variant="overline">Albums</Typography>
                </div>
                <div className={classes.cardNumber}>
                    <Typography color="secondary" variant="body1">{numReviews}</Typography>
                    <Typography color="secondary" variant="overline">Reviews</Typography>
                </div>
            </div>
        </div >
    );
}
