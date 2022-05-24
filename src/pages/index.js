import Head from "next/head";
import Image from "next/image";
import { makeStyles, ThemeProvider } from "@mui/styles";

import AlbumCard from "../components/spot-album-card/albumCard";
import UserCard from "../components/user-card";
import { AppThemeProvider } from "../theme/ThemeContext";

const useStyles = makeStyles({});

export default function Home() {
  const classes = useStyles();

  return (
    <div>
      <UserCard
        name="Davi Emediato"
        location="Belo Horizonte - MG"
        description="Apreciador  da natureza."
        unfollow
      />
    </div>
  );
}
