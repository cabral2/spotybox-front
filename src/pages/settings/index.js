import { makeStyles } from '@mui/styles';
import React, { useState, useEffect } from 'react';
import { TextField, Typography, CardMedia, Button } from '@mui/material';
import ButtonSpoty from '../../components/button';
import { get } from '../../api-consumer/index';
import axios from 'axios';
import Cookies from 'js-cookie';

const useStyles = makeStyles({
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
});

export default function SettingsPage({ name, lastName, bio, birthDate, localization, password, image }) {
  const classes = useStyles();
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const [userData, setUserData] = useState();

  const saveFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleGetUserData = async () => {
    const userEmail = Cookies.get(process.env.NEXT_PUBLIC_USER_EMAIL_COOKIE);
    const data = await get('user/email', { email: userEmail });
    setUserData(data ? data[0] : null);
  };

  const submitForm = async () => {
    const baseUrl = process.env.NEXT_PUBLIC_URL_API;

    if (!userData || !userData.id) return;

    const formData = new FormData();
    formData.append('file', file);
    formData.append('userId', userData.id);
    await axios.post(baseUrl + 'user/photo', formData);
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

  return (
    <div className={classes.settingsPage}>
      <CardMedia className={classes.cardMedia} component="img" image={preview} />
      <div className={classes.settingsCard}>
        <div className={classes.settingsBody}>
          <Typography color="secondary">Name</Typography>
          <TextField color="secondary" focused id="name" value={name} type="text" autoComplete="name" />
          <Typography color="secondary">Last Name</Typography>
          <TextField color="secondary" focused id="lastName" value={lastName} type="text" autoComplete="lastName" />
          <Typography color="secondary">Bio</Typography>
          <TextField color="secondary" focused id="bio" value={bio} type="text" autoComplete="bio" />
          <Typography color="secondary">Birth Date</Typography>
          <TextField color="secondary" focused id="birthDate" value={birthDate} type="date" autoComplete="birthDate" />
          <Typography color="secondary">Localization</Typography>
          <TextField
            color="secondary"
            focused
            id="localization"
            value={localization}
            type="text"
            autoComplete="localization"
          />
          <Typography color="secondary">Password</Typography>
          <TextField color="secondary" focused id="password" type="password" value={password} autoComplete="password" />
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
            onClick={submitForm}
          ></ButtonSpoty>
          <ButtonSpoty
            value="Cancel"
            color="secondary"
            backgroundColor="#2D2D2D"
            borderColor="red"
            borderWidth={2}
            width={150}
            borderRadius={15}
            onClick={() => console.log('Cancel')}
          ></ButtonSpoty>
        </div>
      </div>
    </div>
  );
}
