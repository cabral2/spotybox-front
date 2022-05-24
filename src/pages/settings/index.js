import { makeStyles } from "@mui/styles";
import { FormControl, Input, InputLabel, FormHelperText } from "@mui/material";
import { Fragment } from "react";
import CustomAppBar from "../../components/CustomAppBar/CustomAppBar";
import Footer from "../../components/footer";

const useStyles = makeStyles({
    settingsBody: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    }
});


export default function SettingsPage() {
    const classes = useStyles();

    return (
        <Fragment>
            <Fragment className={classes.settingsBody}>
                <FormControl>
                    <InputLabel htmlFor="username">Username</InputLabel>
                    <Input id="username" />
                    <FormHelperText>
                        This is the username you use to login to SpotyBox.
                    </FormHelperText>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input id="password" />
                    <FormHelperText>
                        This is the password you use to login to SpotyBox.
                    </FormHelperText>
                </FormControl>
            </Fragment>
            <Footer />
        </Fragment>
    );
}
