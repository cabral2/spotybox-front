import { Typography } from "@mui/material";
import React, { Fragment } from "react";
import Footer from "../../components/footer";
import Grid from "@mui/material/Grid";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  text: {
    color: "white",
  },
});

export default function ForgotPassword() {
  const styles = useStyles();
  return (
    <Fragment>
      <Grid
        container
        spacing={2}
        direction="column"
        justifyContent="center"
        alignItems="center"
        style={{ height: 700 }}
      >
        <Typography className={styles.text} variant="h3">
          Em construção
        </Typography>
      </Grid>
      <Footer />
    </Fragment>
  );
}
