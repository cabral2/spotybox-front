import React from "react";

import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  textField: {
    borderColor: "white !important",
    borderWidth: 2,
    width: 350,
  },
  text: {
    color: "white",
  },
});

export default function InputIcon(props) {
  const styles = useStyles();

  return (
    <Grid container style={{ width: 350 }}>
      <Grid item xs={12}>
        <TextField
          InputProps={{
            classes: { notchedOutline: styles.textField },
            startAdornment: (
              <InputAdornment position="start" style={{ color: "white" }}>
                {props.icon}
              </InputAdornment>
            ),
            className: styles.text,
          }}
          variant="outlined"
          size="small"
          type={props.password ? "password" : "text"}
        />
      </Grid>
    </Grid>
  );
}
