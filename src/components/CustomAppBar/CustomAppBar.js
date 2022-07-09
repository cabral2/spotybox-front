import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { AppBar, Avatar, Button, Switch, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import classNames from 'classnames';
import { useAppThemeContext } from '../../theme/ThemeContext';
import Cookie from 'js-cookie';

const useStyles = makeStyles((theme) => {
  return {
    appBar: {
      height: '4rem',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'row',
      position: 'sticky',
      backgroundColor: theme?.palette?.background?.footer,
    },
    logoContainer: {
      display: 'flex',
      flex: '2',
    },
    navContainer: {
      display: 'flex',
      justifyContent: 'space-around',
      textAlign: 'right',
      flex: '1',
      alignItems: 'center',
    },
    navContainerFalse: {
      display: 'block',
      justifyContent: 'space-around',
      textAlign: 'right',
      alignItems: 'center',
      color: 'red',
    },
    navRoute: {
      flex: '1',
      alignItems: 'center',
      textDecoration: 'none',
    },
    mainIcon: {
      marginLeft: '1rem',
      color: 'green',
      backgroundColor: 'green',
      alignItems: 'center',
      cursor: 'pointer',
    },
    mainName: {
      marginLeft: '.5rem',
      display: 'flex',
      fontSize: '1.25rem',
      alignItems: 'center',
      cursor: 'pointer',
    },
    logButton: {
      borderColor: theme?.palette?.primary?.contrastText,
      flex: '1',
      maxWidth: '.25rem',
      height: '1.5rem',
      // fontSize: ".75rem",
      margin: 0,
      padding: 0,
      color: 'black',
    },
    linkText: {
      cursor: 'pointer',
    },
    logInText: {
      textTransform: 'capitalize',
    },
  };
});

const Menus = (props) => {
  const classes = useStyles();
  return (
    <div className={classes.navContainer}>
      <Link className={classNames(classes.navRoute)} href="/profile">
        <Typography className={classes.linkText} color={'secondary'}>
          {props.user}
        </Typography>
      </Link>
      <Link className={classNames(classes.navRoute)} href="/">
        <Typography className={classes.linkText} color={'secondary'}>
          Home
        </Typography>
      </Link>
      <Link className={classNames(classes.navRoute)} href="/albuns">
        <Typography className={classes.linkText} color={'secondary'}>
          Albuns
        </Typography>
      </Link>
      <Link className={classNames(classes.navRoute)} href="/settings">
        <Typography className={classes.linkText} color={'secondary'}>
          Settings
        </Typography>
      </Link>
    </div>
  );
};

export default function CustomAppBar() {
  const { theme, themeName, toggleTheme } = useAppThemeContext();

  useEffect(() => {
    let token = Cookie.get(process.env.NEXT_PUBLIC_AUTH_COOKIE);
    if (token) {
      setAuth(true);
      setUsername(Cookie.get(process.env.NEXT_PUBLIC_USER_COOKIE));
      setLogin('Logout');
    }
  }, []);

  const [auth, setAuth] = useState(false);
  const [username, setUsername] = useState('My Profile');
  const [login, setLogin] = useState('Log in');

  const classes = useStyles();
  return (
    <AppBar className={classes.appBar}>
      <Link className={classNames(classes.navRoute)} href="/">
        <div className={classes.logoContainer}>
          <Avatar className={classes.mainIcon} sx={{ width: '2rem', height: '2rem' }} />
          <div className={classes.mainName}>SpotyBox</div>
        </div>
      </Link>
      <div className={auth ? classes.navContainer : classes.navContainerFalse}>
        {auth && <Menus user={username} />}
        <Button variant="outlined" className={classes.logButton} color="primary">
          <Link className={classNames(classes.navRoute)} href="/login">
            <Typography color={'secondary'} className={classes.logInText}>
              {login}
            </Typography>
          </Link>
        </Button>
        <Switch defaultChecked onChange={toggleTheme} color="secondary" />
      </div>
    </AppBar>
  );
}
