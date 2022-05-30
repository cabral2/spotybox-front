import { makeStyles } from '@mui/styles';
import UserCard from "../user-card";

const useStyles = makeStyles({
  favoriteContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    gap: '1rem',
  }
});

export default function FollowTab({ type }) {
  const classes = useStyles();
  const isTypeFollowers = type === 'Followers';
  const isTypeFollowing = type === 'Following';

  const usersFollow = [
    {
      name: 'John Doe',
      location: 'New York, NY',
      description: 'I am a full stack developer and I love to create cool stuff.',
      unfollow: isTypeFollowing,
      blockUser: isTypeFollowers,
    },
    {
      name: 'John Doe',
      location: 'New York, NY',
      description: 'I am a full stack developer and I love to create cool stuff.',
      unfollow: isTypeFollowing,
      blockUser: isTypeFollowers,
    },
    {
      name: 'John Doe',
      location: 'New York, NY',
      description: 'I am a full stack developer and I love to create cool stuff.',
      unfollow: isTypeFollowing,
      blockUser: isTypeFollowers,
    },
  ]

  return (
    <div className={classes.favoriteContainer}>
      {usersFollow.map((user, index) => (
        <UserCard
          key={index}
          name={user.name}
          location={user.location}
          description={user.description}
          unfollow={user.unfollow}
          blockUser={user.blockUser}
        />
      ))}
    </div>
  );
}
