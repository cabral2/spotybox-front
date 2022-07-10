import React, { Fragment, useState } from 'react';
import axios from 'axios';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';

import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import TextFieldStyled from '../../components/TextFieldStyled';

const useStyles = makeStyles({
  textField: {
    borderColor: 'white !important',
    color: 'white',
  },
  text: {
    color: 'white',
  },
  forms: {
    margin: 0,
    width: 500,
    color: 'white',
  },
  item: {
    marginTop: 15,
  },
  itemBirthDay: {
    marginTop: 40,
  },
});

const Months = (props) => {
  const styles = useStyles();

  const months = {
    January: '01',
    February: '02',
    March: '03',
    April: '04',
    May: '05',
    June: '06',
    July: '07',
    August: '08',
    September: '09',
    October: '10',
    November: '11',
    December: '12',
  };
  return (
    <Select size="small" fullWidth className={styles.text} value={props.value} onChange={props.onChange}>
      {Object.keys(months).map((month) => (
        <MenuItem key={month} value={months[month]}>
          {month}
        </MenuItem>
      ))}
    </Select>
  );
};

export default function ForgotPassword() {
  const styles = useStyles();
  const [showAlertError, setShowAlertError] = useState();
  const [showAlertSuccess, setShowAlertSuccess] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [successMessage, setSuccessMessage] = useState();
  const [forms, setForms] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
    day: '',
    month: '',
    year: '',
    localization: '',
    bio: '',
  });

  const checkPassword = () => {
    if (forms.password !== forms.confirmPassword) {
      setErrorMessage('Passwords are different');
      setShowAlertError(true);
      return false;
    }
    return true;
  };

  const createUser = async () => {
    const baseURL = process.env.NEXT_PUBLIC_URL_API + 'user/create';
    const birth_date = `${forms.year}-${forms.month}-${forms.day}`;

    if (checkPassword()) {
      await axios
        .post(baseURL, { ...forms, birth_date })
        .then((response) => response.data)
        .then((data) => {
          setShowAlertSuccess(true);
          setSuccessMessage('User created successfully');
        })
        .catch((err) => {
          setErrorMessage(err.response.data.message);
          setShowAlertError(true);
        });
    }
  };

  return (
    <Fragment>
      <Grid container direction="column" justifyContent="center" alignItems="center">
        <Grid item xs={12}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="flex-start"
            spacing={1}
            className={styles.forms}
          >
            <Grid item xs={12}>
              <Box className={styles.item}>
                <Typography color="secondary" variant="h4">
                  Singup
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={styles.item}>
                <Typography color="secondary">E-mail</Typography>
                <TextFieldStyled
                  type="email"
                  value={forms.email}
                  onChange={(event) => setForms({ ...forms, email: event.target.value })}
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={styles.item}>
                <Typography color="secondary">Password</Typography>
                <TextFieldStyled
                  type="password"
                  value={forms.password}
                  onChange={(event) => setForms({ ...forms, password: event.target.value })}
                  password
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={styles.item}>
                <Typography color="secondary">Confirm Password</Typography>
                <TextFieldStyled
                  type="confirmPass"
                  value={forms.confirmPassword}
                  onChange={(event) => setForms({ ...forms, confirmPassword: event.target.value })}
                  password
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={styles.item}>
                <Typography color="secondary">First Name</Typography>
                <TextFieldStyled
                  type="first_name"
                  value={forms.first_name}
                  onChange={(event) => setForms({ ...forms, first_name: event.target.value })}
                />
              </Box>
            </Grid>

            <Grid item xs={6}>
              <Box className={styles.item}>
                <Typography color="secondary">Last Name</Typography>
                <TextFieldStyled
                  type="last_name"
                  value={forms.last_name}
                  onChange={(event) => setForms({ ...forms, last_name: event.target.value })}
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box className={styles.item}>
                <Typography color="secondary">Birth Day</Typography>
                <Typography color="secondary">Day</Typography>
                <TextFieldStyled
                  type="day"
                  value={forms.day}
                  onChange={(event) => setForms({ ...forms, day: event.target.value })}
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box className={styles.itemBirthDay}>
                <Typography color="secondary">Month</Typography>
                <Months value={forms.month} onChange={(event) => setForms({ ...forms, month: event.target.value })} />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box className={styles.itemBirthDay}>
                <Typography color="secondary">Year</Typography>
                <TextFieldStyled
                  type="year"
                  value={forms.year}
                  onChange={(event) => setForms({ ...forms, year: event.target.value })}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={styles.item}>
                <Typography color="secondary">Localization</Typography>
                <TextFieldStyled
                  type="localization"
                  value={forms.localization}
                  onChange={(event) => setForms({ ...forms, localization: event.target.value })}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <Box className={styles.item}>
                <Typography color="secondary">Bio</Typography>
                <TextFieldStyled
                  type="bio"
                  value={forms.bio}
                  onChange={(event) => setForms({ ...forms, bio: event.target.value })}
                  multiline
                />
              </Box>
            </Grid>

            <Grid item xs={4}>
              <Box className={styles.item}>
                <Button variant="contained" onClick={() => createUser()}>
                  Create Account
                </Button>
              </Box>
            </Grid>

            {showAlertError && (
              <Grid item xs={12}>
                <Alert
                  onClose={() => {
                    setShowAlertError(false);
                  }}
                  severity="error"
                >
                  {errorMessage}
                </Alert>
              </Grid>
            )}

            {showAlertSuccess && (
              <Grid item xs={12}>
                <Alert
                  onClose={() => {
                    setShowAlertSuccess(false);
                  }}
                  severity="success"
                >
                  {successMessage}
                </Alert>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
}
