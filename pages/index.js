import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import { AppBar, Avatar, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import classNames from "classnames";
import CustomAppBar from "./components/CustomAppBar/CustomAppBar";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <CustomAppBar />
    </>
  );
}
