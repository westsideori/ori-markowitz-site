import React from "react";
import { makeStyles, Typography, Grid, Box } from "@material-ui/core";
import { ContactMail } from "@material-ui/icons";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";

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
  linkText: {
    textDecoration: "none",
    color: "#006064",
  },
  title: {
    color: "#00838f",
    fontWeight: "500",
    textTransform: "uppercase",
    padding: "3rem 0",
  },
}));

const Contact = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography className={classes.title} variant="h4">
        Contact
      </Typography>
      <Grid
        container
        justify="center"
        alignItems="center"
        className={classes.form}
      >
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <a href="mailto:ori.markowitz@gmail.com" className={classes.linkText}>
            <ContactMail />
            <Typography variant="h5">ori.markowitz@gmail.com</Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <a
            href="https://www.linkedin.com/in/ori-markowitz-a321b353/"
            className={classes.linkText}
          >
            <LinkedIn />
            <Typography variant="h5">Ori Markowitz</Typography>
          </a>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <a href="https://github.com/westsideori" className={classes.linkText}>
            <GitHub /> <Typography variant="h5">westsideori</Typography>
          </a>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Contact;
