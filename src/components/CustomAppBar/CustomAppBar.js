import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Avatar, Button, Switch } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import { useAppThemeContext } from "../../theme/ThemeContext";

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      height: "4rem",
      display: "flex",
      alignItems: "center",
      flexDirection: "row",
      position: "sticky",
      backgroundColor: theme?.palette?.background?.footer,
    },
    logoContainer: {
      display: "flex",
      flex: "2",
    },
    navContainer: {
      display: "flex",
      justifyContent: "space-around",
      flex: "1",
      alignItems: "center",
    },
    navRoute: {
      flex: "1",
      alignItems: "center",
      color: theme?.palette?.primary?.contrastText,
      "&:link": {
        color: theme?.palette?.primary?.contrastText,
      },
      "&:visited": {
        color: theme?.palette?.primary?.contrastText,
      },
      textDecoration: "none",
    },
    mainIcon: {
      marginLeft: "1rem",
      color: "green",
      backgroundColor: "green",
      alignItems: "center",
    },
    mainName: {
      marginLeft: ".5rem",
      display: "flex",
      fontSize: "1.25rem",
      alignItems: "center",
    },
    logButton: {
      // borderColor: "white",
      flex: "1",
      maxWidth: ".25rem",
      height: "1.5rem",
      fontSize: ".75rem",
      margin: 0,
      padding: 0,
    },
  };
});

export default function CustomAppBar() {
  const { theme, themeName, toggleTheme } = useAppThemeContext();

  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <div className={classes.logoContainer}>
        <Avatar
          className={classes.mainIcon}
          sx={{ width: "2rem", height: "2rem" }}
        />
        <div className={classes.mainName}>SpotyBox</div>
      </div>
      <div className={classes.navContainer}>
        <Link className={classNames(classes.navRoute)} href="/profile">
          My Profile
        </Link>
        <Link className={classNames(classes.navRoute)} href="/">
          Home
        </Link>
        <Link className={classNames(classes.navRoute)} href="/albuns">
          Albuns
        </Link>
        <Link className={classNames(classes.navRoute)} href="/settings">
          Settings
        </Link>
        <Button
          variant="outlined"
          className={classes.logButton}
          color="primary"
        >
          <Link className={classNames(classes.navRoute)} href="/login">
            Log in
          </Link>
        </Button>
        <Switch defaultChecked onChange={toggleTheme} color="secondary" />
      </div>
    </AppBar>
  );
}
