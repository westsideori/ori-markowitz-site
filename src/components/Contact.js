import React from "react";
import {
  makeStyles,
  withStyles,
  TextField,
  Typography,
  Button,
  Grid,
  Box,
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  form: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  },
  button: {
    marginTop: "1rem",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "",
    },
    "& label": {
      color: "",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "",
      },
      "&:hover fieldset": {
        borderColor: "",
      },
      "&.Mui-focused fieldset": {
        borderColor: "",
      },
    },
  },
})(TextField);

const Contact = () => {
  const classes = useStyles();

  return (
    <Box>
      <Grid container justify="center">
        <Box component="form" className={classes.form}>
          <Typography
            variant="h5"
            style={{ textAlign: "center", textTransform: "uppercase" }}
          >
            Contact Me
          </Typography>
          <InputField
            fullWidth={true}
            label="Name"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br></br>
          <InputField
            fullWidth={true}
            label="Email"
            variant="outlined"
            margin="dense"
            size="medium"
          />
          <br></br>
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            fullWidth={true}
            endIcon={<SendIcon />}
          >
            Contact
          </Button>
        </Box>
      </Grid>
    </Box>
  );
};

export default Contact;
