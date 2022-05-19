import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

import Footer from "../components/footer";
import CustomAppBar from "../components/CustomAppBar/CustomAppBar";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <CustomAppBar />
      <Footer /> 
    </div>
  );
}
