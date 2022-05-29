import { CardMedia, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
        width: '5rem',
        height: '5rem',
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
    bio: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: '1rem',
        lineHeight: '33px',
    },
    city: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
    },
    cityRow: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'end',
        marginTop: '-1rem',
        gap: '0.3rem',
        marginLeft: '-0.3rem'
    }
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
                <Typography className={classes.bio} color="secondary" variant="body1">{bio}</Typography>
                <div className={classes.cityRow}>
                    <LocationOnIcon color="secondary" />
                    <Typography className={classes.city} marginTop="-1rem" color="secondary" variant="body1">{city}</Typography>
                </div>
                <div className={classes.infoFollower}>
                    <Typography color="secondary" variant="body1">{numFollowers}</Typography>
                    <Typography marginLeft="-0.8rem" color="secondary" variant="body1">Followers</Typography>
                    <Typography color="secondary" variant="body1">{numFollowing}</Typography>
                    <Typography marginLeft="-0.8rem" color="secondary" variant="body1">Following</Typography>
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
