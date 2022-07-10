import React, { Fragment, useState } from 'react';
import TextField from '@mui/material/TextField';

import { makeStyles } from '@mui/styles';

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

export default function TextFieldStyled(props) {
  const styles = useStyles();


  return (
    <TextField
      id={"outlined-basic" + props.type}
      multiline={props.multiline}
      variant="outlined"
      fullWidth
      size="small"
      value={props.value}
      onChange={props.onChange}
      InputProps={{
        classes: { notchedOutline: styles.textField },
        className: styles.text,
      }}
      type={props.password ? 'password' : 'text'}
    />
  );
}
