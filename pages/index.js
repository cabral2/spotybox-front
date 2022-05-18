import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { AppBar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  appBar: {
    height: "6vh",
    display: "flex",
    // alignItems: "center",
    justifyContent: "center",
  },
  logoContainer: {
    display: "flex",
    flex: "1",
  },
  navContainer: {
    display: "flex",
    flex: "1",
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <AppBar className={classes.appBar}></AppBar>
    </>
  );
}
