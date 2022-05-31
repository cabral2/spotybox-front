import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Avatar, Button, Switch, Typography } from "@mui/material";
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
      borderColor: theme?.palette?.primary?.contrastText,
      flex: "1",
      maxWidth: ".25rem",
      height: "1.5rem",
      // fontSize: ".75rem",
      margin: 0,
      padding: 0,
      color: "black",
    },
    linkText: {
      cursor: "pointer",
    },
    logInText: {
      textTransform: "capitalize",
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
          <Typography className={classes.linkText} color={"secondary"}>
            My Profile
          </Typography>
        </Link>
        <Link className={classNames(classes.navRoute)} href="/">
          <Typography className={classes.linkText} color={"secondary"}>
            Home
          </Typography>
        </Link>
        <Link className={classNames(classes.navRoute)} href="/albuns">
          <Typography className={classes.linkText} color={"secondary"}>
            Albuns
          </Typography>
        </Link>
        <Link className={classNames(classes.navRoute)} href="/settings">
          <Typography className={classes.linkText} color={"secondary"}>
            Settings
          </Typography>
        </Link>
        <Button
          variant="outlined"
          className={classes.logButton}
          color="primary"
        >
          <Link className={classNames(classes.navRoute)} href="/login">
            <Typography color={"secondary"} className={classes.logInText}>
              Log in
            </Typography>
          </Link>
        </Button>
        <Switch defaultChecked onChange={toggleTheme} color="secondary" />
      </div>
    </AppBar>
  );
}
