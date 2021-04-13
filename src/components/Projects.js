import React from "react";
import { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Modal, Backdrop, Fade } from "@material-ui/core";
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
    color: "#006064",
    fontWeight: "500",
  },
  projectTitle: {
    color: "#006064",
  },
  linkColor: {
    color: "#006064",
    textDecoration: "none",
  },
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Projects = () => {
  const classes = useStyles();

  const [openRosterMonster, setOpenRosterMonster] = useState(false);
  const [openDayMaker, setOpenDayMaker] = useState(false);
  const [openISherpa, setOpenISherpa] = useState(false);

  const handleOpen = (id) => {
    if (id === "roster-monster") {
      setOpenRosterMonster(true);
    }
    if (id === "day-maker") {
      setOpenDayMaker(true);
    }
    if (id === "i-sherpa") {
      setOpenISherpa(true);
    }
  };

  const handleClose = () => {
    setOpenRosterMonster(false);
    setOpenDayMaker(false);
    setOpenISherpa(false);
  };

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
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
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
              <Button
                size="small"
                className={classes.linkColor}
                onClick={() => handleOpen("roster-monster")}
              >
                Demo
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openRosterMonster}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openRosterMonster}>
                  <div className={classes.paper}>
                    <iframe
                      src="https://www.loom.com/embed/099c06549c954022bcec83fe7dcf54fd"
                      height="315"
                      width="560"
                      frameborder="0"
                      title="Loom video player"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                      // style={{
                      //   position: "center",
                      //   top: 0,
                      //   left: 0,
                      //   width: "100%",
                      //   height: "100%",
                      // }}
                    ></iframe>
                  </div>
                </Fade>
              </Modal>
              <a
                className={classes.linkColor}
                href="https://roster-monster.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Live Site
                </Button>
              </a>
              <a
                className={classes.linkColor}
                href="https://github.com/westsideori/roster-monster-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Front-End
                </Button>
              </a>
              <a
                className={classes.linkColor}
                href="https://github.com/westsideori/roster-monster-backend"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Back-End
                </Button>
              </a>
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
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
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
              <Button
                size="small"
                className={classes.linkColor}
                onClick={() => handleOpen("day-maker")}
              >
                Demo
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openDayMaker}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openDayMaker}>
                  <div className={classes.paper}>
                    <iframe
                      src="https://www.loom.com/embed/2dcdd487c4c2441aaf9ef62fafe5ba44"
                      height="315"
                      width="560"
                      title="Loom video player"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                    ></iframe>
                  </div>
                </Fade>
              </Modal>
              <a
                className={classes.linkColor}
                href="https://day-maker.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Live Site
                </Button>
              </a>
              <a
                className={classes.linkColor}
                href="https://github.com/westsideori/Day-Maker-frontend/tree/master/day-maker-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Front-End
                </Button>
              </a>
              <a
                className={classes.linkColor}
                href="https://github.com/westsideori/Day-Maker-backend/tree/master"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Back-End
                </Button>
              </a>
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
                <Typography
                  gutterBottom
                  variant="h5"
                  className={classes.projectTitle}
                >
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
              <Button
                size="small"
                className={classes.linkColor}
                onClick={() => handleOpen("i-sherpa")}
              >
                Demo
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openISherpa}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openISherpa}>
                  <div className={classes.paper}>
                    <iframe
                      src="https://www.loom.com/embed/71b8d911fb1e43e0a4fe87ebda047801"
                      height="315"
                      width="560"
                      title="Loom video player"
                      frameborder="0"
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                    ></iframe>
                  </div>
                </Fade>
              </Modal>
              <a
                className={classes.linkColor}
                href="https://github.com/westsideori/i-sherpa-frontend"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Front-End
                </Button>
              </a>
              <a
                className={classes.linkColor}
                href="https://github.com/westsideori/i_sherpa_backend"
                target="_blank"
                rel="noreferrer"
              >
                <Button size="small" className={classes.linkColor}>
                  Back-End
                </Button>
              </a>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
