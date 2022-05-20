import Head from "next/head";
import Image from "next/image";
import { makeStyles } from "@mui/styles";

import Footer from "../components/footer";
import AlbumCard from "../components/spot-album-card/albumCard";
import UserCard from "../components/user-card";
import CustomAppBar from "../components/CustomAppBar/CustomAppBar";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <CustomAppBar />
      <UserCard
        name="Davi Emediato"
        location="Belo Horizonte - MG" 
        description="Apreciador  da natureza."
        unfollow
      />
      <Footer /> 
    </div>
  );
}
