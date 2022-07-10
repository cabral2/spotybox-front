/* eslint-disable react-hooks/exhaustive-deps */
import React, { Fragment, useState, useEffect } from 'react';

import axios from 'axios';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import KeyIcon from '@mui/icons-material/Key';
import FormControlLabel from '@mui/material/FormControlLabel';
import Alert from '@mui/material/Alert';
import Cookie from 'js-cookie';
import Router from 'next/router';
import { makeStyles } from '@mui/styles';

import { Button, Checkbox, Link, Typography } from '@mui/material';
import InputIcon from '../../components/inputIcon';

const useStyles = makeStyles({
  paper: {
    width: 400,
    height: 700,
    backgroundColor: '#646464',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  textField: {
    borderColor: 'white !important',
    borderWidth: 2,
    width: 350,
  },
  text: {
    color: 'white',
  },
  button: {
    backgroundColor: '#027C00',
    borderColor: 'white',
    color: 'white',
    width: 150,
    '&:hover': {
      color: 'white',
      borderColor: 'white',
    },
  },
  checkBox: {
    color: 'white',
    '&.Mui-checked': {
      color: 'white',
    },
  },
  title: {
    marginLeft: 30,
    marginRight: 30,
    marginTop: 60,
    marginBottom: 80,
    color: 'white',
  },
});

export default function LoginPage(props) {
  const styles = useStyles();

  const [token, setToken] = useState('');
  const [user, setUser] = useState();
  const [userData, setUserData] = useState();
  const [password, setPassword] = useState();
  const [errorMessage, setError] = useState();
  const [showAlert, setShowAlert] = useState();

  const keepConnected = 'Stay connected';
  const messageLogin = 'Welcome to the best community for music lovers.';
  const forgotMyPass = 'Forgot my password';
  const creatAccount = 'Create Account';

  useEffect(() => {
    setCookie();
  }, [token]);

  useEffect(() => {
    if (Cookie.get(process.env.NEXT_PUBLIC_AUTH_COOKIE)) {
      Cookie.remove(process.env.NEXT_PUBLIC_AUTH_COOKIE);
      Cookie.remove(process.env.NEXT_PUBLIC_USER_COOKIE);
      goTo();
    }
  }, []);

  const login = async () => {
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'account/auth';

    await axios
      .post(baseURL, { email: user, password })
      .then((response) => response.data)
      .then((data) => {
        setToken(data.token);
        setUserData(data.data);
      })
      .catch((err) => {
        setError(err.response.data.message);
        setShowAlert(true);
      });
  };

  const goTo = async () => {
    await Router.push('/');
    window.location.reload();
  };

  const setCookie = () => {
    if (token !== '' && token !== null) {
      Cookie.set(process.env.NEXT_PUBLIC_AUTH_COOKIE, token, { expires: 2 });
      Cookie.set(process.env.NEXT_PUBLIC_USER_COOKIE, userData.first_name, { expires: 2 });
      goTo();
    }
  };

  return (
    <Fragment>
      <Paper className={styles.paper} elevation={20}>
        <Grid container spacing={2} direction="column" alignItems="center" style={{ height: 700 }}>
          <Grid item xs={1}>
            <Typography className={styles.title} variant="h4">
              {messageLogin}
            </Typography>
          </Grid>

          <Grid item xs={1}>
            <InputIcon
              icon={<AccountBoxIcon />}
              value={user}
              onChange={(e) => {
                setUser(e.target.value);
              }}
            />
          </Grid>

          <Grid item xs={1}>
            <InputIcon
              icon={<KeyIcon />}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              password
            />
            <FormControlLabel
              className={styles.checkBox}
              control={<Checkbox className={styles.checkBox} defaultChecked />}
              label={keepConnected}
            />
          </Grid>

          <Grid item xs={1}>
            <Button className={styles.button} variant="outlined" onClick={() => login()}>
              Login
            </Button>
          </Grid>

          <Grid item xs={1}>
            <Link href="/forgot-password">
              <Typography className={styles.text}>{forgotMyPass}</Typography>
            </Link>
          </Grid>

          <Grid item xs={1}>
            <Link href="/create-account">
              <Typography className={styles.text}>{creatAccount}</Typography>
            </Link>
          </Grid>

          {showAlert && (
            <Grid item xs={1}>
              <Alert
                onClose={() => {
                  setShowAlert(false);
                }}
                severity="error"
              >
                {errorMessage}
              </Alert>
            </Grid>
          )}
        </Grid>
      </Paper>
    </Fragment>
  );
}
