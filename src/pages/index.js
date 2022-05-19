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
      <AppBar className={classes.appBar}>Amorant</AppBar>
    </>
  );
}
