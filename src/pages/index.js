import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@mui/styles";
import CustomAppBar from "../components/CustomAppBar/CustomAppBar";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();

  return (
    <>
      <CustomAppBar />
    </>
  );
}
