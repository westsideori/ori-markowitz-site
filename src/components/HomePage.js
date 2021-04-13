import React from "react";
import { Typography, Avatar, Grid, Box, makeStyles } from "@material-ui/core";
import avatar from "../oripic1.jpeg";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1),
  },
  title: {
    color: "#00838f",
    fontWeight: "500",
  },
  subtitle: {
    // marginBottom: "3rem",
    color: "#0097a7",
  },
  infoContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Box className={classes.infoContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Avatar" />
      </Grid>
      <Typography className={classes.title} variant="h4">
        Ori Markowitz
      </Typography>
      <br></br>
      <Typography className={classes.subtitle} variant="h5">
        Full-Stack Software Developer
      </Typography>
      <Grid container justify="center" direction="column" alignItems="center">
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography variant="body1">
            I'm a full-stack software engineer, adept at React Hooks,
            JavaScript, and Ruby on Rails, with a background in innovative
            business and client management. My experience is diversified across
            multiple verticals, lending to a unique ability to combine technical
            prowess and client-facing strategy in order to achieve goals.
          </Typography>
        </Grid>
        <br></br>
        <br></br>
        <Typography className={classes.subtitle} variant="h5">
          Technical Skills
        </Typography>
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Typography variant="body1">
            JavaScript (ES6) (proficient), React Hooks (proficient), Ruby
            (proficient), Rails (proficient), APIs, Rest-Client, React Router,
            BCrypt, Redux, Postgresql, SQL, Heroku, Netlify, HTML, CSS,
            Bootstrap, CLI, Git, Agile Methodologies, RESTful architecture
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomePage;
