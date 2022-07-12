import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { TextField, Typography, CardMedia, Button } from '@mui/material';
import ButtonSpoty from '../../components/button';
import { get } from '../../api-consumer/index';
import axios from 'axios';
import Cookies from 'js-cookie';

const useStyles = makeStyles((theme) => {
  return {
    settingsPage: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      gap: '5rem',
    },
    settingsCard: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '5rem',
    },
    settingsBody: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignContent: 'center',
      gap: '0.3rem',
      width: '30rem',
    },
    settingsFooter: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '3rem',
      margin: '2rem',
    },
    cardMedia: {
      width: '10rem',
      height: '10rem',
      marginTop: '4rem',
      marginRight: '-8rem',
      borderRadius: '5rem',
      border: '3px solid #ffff',
    },
    reviewInput: {
      color: theme?.palette?.primary?.contrastText,
    },
  };
});

export default function SettingsPage() {
  const classes = useStyles();
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [bio, setBio] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [localization, setLocalization] = useState('');
  const [password, setPassword] = useState('');
  const [userId, setUserId] = useState('');
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [userData, setUserData] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  useEffect(() => {
    // create the preview
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      // free memory when ever this component is unmounted
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [file]);

  useEffect(() => {
    const handleGetUserData = async () => {
      const userEmail = Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
      const data = await get('user/email', { email: userEmail });
      setUserData(data ? data[0] : null);
    };

    handleGetUserData();
  }, []);

  const updateUser = async () => {
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'user';
    const user = {};

    user.first_name = name;
    user.last_name = lastName;
    user.bio = bio;
    user.birth_date = birthDate;
    user.localization = localization;
    user.password = password;
    user.id = userId;

    await axios.put(baseURL, { user });

    if (!userData || !userData.id) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userData.id);
    await axios.post(baseURL + '/photo', formData);
  };

  const getUserInfo = async () => {
    let baseURL =
      process.env.NEXT_PUBLIC_URL_API + 'user/email?email=' + Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const user = await axios
      .get(baseURL)
      .then((response) => response.data[0])
      .catch((error) => console.error(error.message));

    setUserId(user.id);
    setName(user.first_name);
    setLastName(user.last_name);
    setBio(user.bio);
    setBirthDate(user.birth_date.slice(0, 10));
    setLocalization(user.localization);
    setPassword(user.password);
    setPreview(user['photo-url']);
  };

  useEffect(() => {
    if (name === '') {
      getUserInfo();
    }
  }, [name, lastName, bio, birthDate, localization, password]);

  return (
    <div className={classes.settingsPage}>
      <CardMedia className={classes.cardMedia} component="img" image={preview} />
      <div className={classes.settingsCard}>
        <div className={classes.settingsBody}>
          <Typography color="secondary">Name</Typography>
          <TextField
            color="secondary"
            focused
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            autoComplete="name"
            inputProps={{ className: classes.reviewInput }}
          />
          <Typography color="secondary">Last Name</Typography>
          <TextField
            color="secondary"
            focused
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            type="text"
            autoComplete="lastName"
            inputProps={{ className: classes.reviewInput }}
          />
          <Typography color="secondary">Bio</Typography>
          <TextField
            color="secondary"
            focused
            id="bio"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            type="text"
            autoComplete="bio"
            inputProps={{ className: classes.reviewInput }}
          />
          <Typography color="secondary">Birth Date</Typography>
          <TextField
            color="secondary"
            focused
            id="birthDate"
            format="dd/MM/yyyy"
            value={birthDate}
            onChange={(e) => setBirthDate(e.target.value)}
            type="date"
            autoComplete="birthDate"
            inputProps={{ className: classes.reviewInput }}
          />
          <Typography color="secondary">Localization</Typography>
          <TextField
            color="secondary"
            focused
            id="localization"
            value={localization}
            onChange={(e) => setLocalization(e.target.value)}
            type="text"
            autoComplete="localization"
            inputProps={{ className: classes.reviewInput }}
          />
          <Typography color="secondary">Password</Typography>
          <TextField
            color="secondary"
            focused
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="password"
            inputProps={{ className: classes.reviewInput }}
          />
          <Button variant="contained" component="label">
            Upload Profile Photo
            <input type="file" onChange={saveFile} hidden />
          </Button>
        </div>
        <div className={classes.settingsFooter}>
          <ButtonSpoty
            value="Save"
            color="secondary"
            backgroundColor="#2D2D2D"
            borderColor="green"
            borderWidth={2}
            width={150}
            borderRadius={15}
            onClick={updateUser}
          ></ButtonSpoty>
          <ButtonSpoty
            value="Cancel"
            color="secondary"
            backgroundColor="#2D2D2D"
            borderColor="red"
            borderWidth={2}
            width={150}
            borderRadius={15}
            onClick={getUserInfo}
          ></ButtonSpoty>
        </div>
      </div>
    </div>
  );
}
