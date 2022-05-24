import React, { Fragment, useState } from "react";

import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import KeyIcon from "@mui/icons-material/Key";
import FormControlLabel from "@mui/material/FormControlLabel";
import { makeStyles } from "@mui/styles";

import Footer from "../../components/footer";
import { Button, Checkbox, Link, Typography } from "@mui/material";
import InputIcon from "../../components/inputIcon";

const useStyles = makeStyles({
  paper: {
    width: 400,
    height: 700,
    backgroundColor: "#646464",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },
  textField: {
    borderColor: "white !important",
    borderWidth: 2,
    width: 350,
  },
  text: {
    color: "white",
  },
  button: {
    backgroundColor: "#027C00",
    borderColor: "white",
    color: "white",
    width: 150,
    "&:hover": {
      color: "white",
      borderColor: "white",
    },
  },
  checkBox: {
    color: "white",
    "&.Mui-checked": {
      color: "white",
    },
  },
  title: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 60,
    marginBottom: 80,
    color: "white",
  },
});

export default function LoginPage(props) {
  const styles = useStyles();

  const keepConnected = "Matenha-se conectado";
  const messageLogin = "Bem-vindo à melhor comunidade da amantes de música.";
  const forgotMyPass = "Esqueci minha senha";

  return (
    <Fragment>
      <Paper className={styles.paper} elevation={20}>
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          style={{ height: 700 }}
        >
          <Grid item xs={1}>
            <Typography className={styles.title} variant="h4">
              {messageLogin}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <InputIcon icon={<AccountBoxIcon />} />
          </Grid>

          <Grid item xs={1}>
            <InputIcon icon={<KeyIcon />} password />
            <FormControlLabel
              className={styles.checkBox}
              control={<Checkbox className={styles.checkBox} defaultChecked />}
              label={keepConnected}
            />
          </Grid>

          <Grid item xs={1}>
            <Button className={styles.button} variant="outlined">
              Login
            </Button>
          </Grid>

          <Grid item xs={1}>
            <Link href="/forgot-password">
              <Typography className={styles.text}>{forgotMyPass}</Typography>
            </Link>
          </Grid>
        </Grid>
      </Paper>

      <Footer />
    </Fragment>
  );
}
