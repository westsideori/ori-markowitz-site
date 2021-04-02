import React from "react";
import { makeStyles } from "@material-ui/core";
import rosterMonsterImage from "../rostermonsterthumb.png";
import dayMakerImage from "../daymakerthumb.png";
import iSherpaImage from "../isherpathumb.png";
import {
  Box,
  Grid,
  Button,
  Typography,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    height: "100%",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "5rem auto",
  },
  heading: {
    padding: "3rem 0",
    textTransform: "uppercase",
  },
}));

const Projects = () => {
  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography
        variant="h4"
        align="center"
        className={classes.heading}
        color="textPrimary"
      >
        Projects
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                alt="RosterMonster"
                height="140"
                image={rosterMonsterImage}
                component="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  RosterMonster
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  RosterMonster is a fantasy basketball roster tracking tool
                  with sortable player stats, projected stats, and lineup
                  optimization.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Demo
              </Button>
              <Button size="small" color="primary">
                Live Site
              </Button>
              <Button size="small" color="primary">
                Front-End
              </Button>
              <Button size="small" color="primary">
                Back-End
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                alt="DayMaker"
                height="140"
                image={dayMakerImage}
                component="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  DayMaker
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  DayMaker is a day-planning application that creates an
                  itinerary of restaurants and activities at the click of a
                  button.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Demo
              </Button>
              <Button size="small" color="primary">
                Live Site
              </Button>
              <Button size="small" color="primary">
                Front-End
              </Button>
              <Button size="small" color="primary">
                Back-End
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                alt="iSherpa"
                height="140"
                image={iSherpaImage}
                component="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  iSherpa
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  iSherpa is a community application to read, write, and share
                  guides on any subject, by earning and spending in-app
                  currency.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                Demo
              </Button>
              <Button size="small" color="primary">
                Front-End
              </Button>
              <Button size="small" color="primary">
                Back-End
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
