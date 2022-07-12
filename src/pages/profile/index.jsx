import { makeStyles } from "@mui/styles";
import {
  Tabs,
  Tab,
} from "@mui/material";
import { useState } from "react";
import FavoriteAlbunsTab from "../../components/FavoriteAlbunsTab";
import ReviewsTab from "../../components/ReviewsTab";
import FollowTab from "../../components/FollowTab";
import ProfileHeader from "../../components/spot-profile-header/profileHeader";
import { useEffect } from "react";
import Cookies from 'js-cookie';
import axios from 'axios';

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
    tabsContainer: {
      width: "90%",
      margin: "auto",
    },
    imageCard: {
      width: "15rem",
      height: "15rem",
      borderRadius: "50%",
    },
    flex: {
      display: "flex",
    },
    userInfos: {
      padding: "1rem 2rem",
    },
    subtitle: {
      color: theme?.palette?.subtitle?.color,
      paddingTop: "1rem",
    },
    buttonsContainer: {
      width: "8rem",
      height: "4rem",
      backgroundColor: theme?.palette?.subtitle?.color,
      borderRadius: "10px",
    },
    divider: {
      color: theme?.palette?.divider?.color,
    },
    tabs: {
      color: theme?.palette?.primary?.contrastText,
    },
    tabChild: {
      color: theme?.palette?.primary?.contrastText,
    },
  };
});

export default function Profile() {
  const classes = useStyles();
  const [profileDescription, setProfileDescription] = useState("");
  const [username, setUsername] = useState("");
  const [locale, setLocale] = useState("");
  const [profileImage, setProfileImage] = useState("");
  const [numAlbums, setNumAlbums] = useState("");
  const [numReviews, setNumReviews] = useState("");
  const [tab, setTab] = useState(1);
  const [userId, setUserId] = useState(0);
  const [followers, setFollowers] = useState(0);
  const [following, setFollowing] = useState(0);

  const handleUser = async () => {
    let baseURL =
      process.env.NEXT_PUBLIC_URL_API + 'user/email?email=' + Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const user = await axios
      .get(baseURL)
      .then((response) => response.data[0])
      .catch((error) => console.error(error.message));

    return user;
  };

  const getUserData = async () => {
    const userEmail = Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'user/email';

    await axios
      .get(baseURL, { params: { email: userEmail } })
      .then((response) => response.data)
      .then((data) => {
        setProfileDescription(data[0].bio);
        setUsername(`${data[0].first_name} ${data[0].last_name}`);
        setLocale(data[0].localization);
        setProfileImage(data[0]['photo-url']);
        setUserId(data[0].id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getNumAlbuns = async () => {
    const user = await handleUser();
    let baseURL = process.env.NEXT_PUBLIC_URL_API + 'favorites/user';
    await axios
      .get(baseURL, { params: { id: user.id } })
      .then((response) => response.data)
      .then((data) => {
        const albums_ids = data.map((favorite) => favorite.album_id);
        setNumAlbums(albums_ids.length);
      })
      .catch((err) => console.error(err.message));
  };

  const getNumReviews = async () => {
    const user = await handleUser();
    let baseURL = process.env.NEXT_PUBLIC_URL_API + 'review/user/' + user.id;

    await axios
      .get(baseURL)
      .then((response) => response.data)
      .then((data) => {
        setNumReviews(data.length);
      })
      .catch((err) => console.error(err.message));
  }


  const handleFollow = async() => {
    let baseURL = process.env.NEXT_PUBLIC_URL_API + `friends/followers?user_id=${userId}`;
    const followers = await axios
      .get(baseURL)
      .then((response) => response.data)
      .then((data) => data.number_followers)
      .catch((error) => console.error(error.message));
    if (followers !=0)
      setFollowers(followers)
    
    baseURL = process.env.NEXT_PUBLIC_URL_API + `friends/following?user_id=${userId}`;
    const following = await axios
      .get(baseURL)
      .then((response) => response.data)
      .then((data) => data.number_following)
      .catch((error) => console.error(error.message));
    if (followers !=0)
      setFollowing(following)
  }

  useEffect(() => {
    const user = Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    if (user) {
      getUserData();
    }
    handleFollow();
  }, [profileDescription, username, locale]);

  useEffect(() => {
    if (numAlbums === "") {
      getNumAlbuns();
    }
  }, [numAlbums]);

  useEffect(() => {
    if (numReviews === "") {
      getNumReviews();
    }
  }, [numAlbums]);

  const handleTabChange = (_, newTab) => {
    setTab(newTab);
  };

  return (
    <div className={classes.container}>
      <ProfileHeader
        image={profileImage}
        name={username}
        bio={profileDescription}
        city={locale}
        numAlbums={numAlbums}
        numReviews={numReviews}
        numFollowing={following}
        numFollowers={followers}
      />
      <div className={classes.bottomContainer}>
        <Tabs
          value={tab}
          onChange={handleTabChange}
          textColor="secondary"
          indicatorColor={"secondary"}
          className={classes.tabs}
        >
          <Tab className={classes.tab} value={1} label="Favorite Albuns" />
          <Tab className={classes.tab} value={2} label="Reviews" />
          <Tab className={classes.tab} value={3} label="Followers" />
          <Tab className={classes.tab} value={4} label="Following" />
        </Tabs>
        <div className={classes.tabsContainer}>
          {tab === 1 ? <FavoriteAlbunsTab /> : <></>}
          {tab === 2 ? <ReviewsTab /> : <></>}
          {tab === 3 ? <FollowTab type={"blockUser"} userId={userId}/> : <></>}
          {tab === 4 ? <FollowTab type={"unfollow"} userId={userId}/> : <></>}
        </div>
      </div>
    </div>
  );
}
