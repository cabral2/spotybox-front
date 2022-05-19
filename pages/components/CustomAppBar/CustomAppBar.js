import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { AppBar, Avatar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";

const useStyles = makeStyles({
  appBar: {
    height: "4rem",
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "black",
    color: "white",
  },
  logoContainer: {
    display: "flex",
    flex: "2",
  },
  navContainer: {
    display: "flex",
    justifyContent: "space-around",
    flex: "1",
  },
  navRoute: {
    flex: "1",
    color: "white",
    alignItems: "center",
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
  },
  logButton: {
    borderColor: "white",
    flex: "1",
    maxWidth: ".25rem",
    height: "1.5rem",
    fontSize: ".75rem",
    margin: 0,
    padding: 0,
  },
});

export default function CustomAppBar() {
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
        <Link className={classNames(classes.navRoute)} href="/">
          My Profile
        </Link>
        <Link className={classNames(classes.navRoute)} href="/">
          Home
        </Link>
        <Link className={classNames(classes.navRoute)} href="/">
          Albuns
        </Link>
        <Link className={classNames(classes.navRoute)} href="/">
          Artists
        </Link>
        <Link className={classNames(classes.navRoute)} href="/">
          About
        </Link>
        <Button variant="outlined" className={classes.logButton}>
          <Link className={classNames(classes.navRoute)} href="/">
            Log in
          </Link>
        </Button>
      </div>
    </AppBar>
  );
}
