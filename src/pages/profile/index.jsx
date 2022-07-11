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
import Cookie from 'js-cookie';
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
  const imageLink =
    "https://m.media-amazon.com/images/I/71D22yQCN0L._AC_SX425_.jpg";
  const [profileDescription, setProfileDescription] = useState("");
  const [username, setUsername] = useState("");
  const [locale, setLocale] = useState("");
  const [tab, setTab] = useState(1);

  const getUserData = async () => {
    const userEmail = Cookie.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'user/email';

    await axios
      .get(baseURL, { params: { email: userEmail } })
      .then((response) => response.data)
      .then((data) => {
        console.log(data[0])
        setProfileDescription(data[0].bio);
        setUsername(`${data[0].first_name} ${data[0].last_name}`);
        setLocale(data[0].localization);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    const user = Cookie.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    if (user) {
      getUserData();
    }
  }, [profileDescription, username, locale]);

  const handleTabChange = (_, newTab) => {
    setTab(newTab);
  };

  return (
    <div className={classes.container}>
      <ProfileHeader
        image={imageLink}
        name={username}
        bio={profileDescription}
        city={locale}
        numFollowing={5}
        numFollowers={5}
        numAlbums={5}
        numReviews={5}
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
          {tab === 3 ? <FollowTab type={"blockUser"} /> : <></>}
          {tab === 4 ? <FollowTab type={"unfollow"} /> : <></>}
        </div>
      </div>
    </div>
  );
}
