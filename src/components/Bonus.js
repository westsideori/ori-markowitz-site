import React, { useState } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import galaxyImage from "../galaxythumb.png";
import misImage from "../misthumb.png";
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

const Bonus = () => {
  const [openMis, setOpenMis] = useState(false);
  const [openGalaxy, setOpenGalaxy] = useState(false);

  const handleOpen = (id) => {
    if (id === "mis") {
      setOpenMis(true);
    }
    if (id === "galaxy") {
      setOpenGalaxy(true);
    }
  };

  const handleClose = () => {
    setOpenMis(false);
    setOpenGalaxy(false);
  };

  const classes = useStyles();

  return (
    <Box className={classes.mainContainer}>
      <Typography
        variant="h4"
        align="center"
        className={classes.heading}
        color="textPrimary"
      >
        Bonus
      </Typography>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                alt="Launch Break"
                height="140"
                image={galaxyImage}
                component="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  Launch Break
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Short film written by Ori Markowitz
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() => handleOpen("galaxy")}
                size="small"
                color="primary"
              >
                Watch
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openGalaxy}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openGalaxy}>
                  <div className={classes.paper}>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/Tw_02PEQeV0"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Fade>
              </Modal>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <Card className={classes.cardContainer}>
            <CardActionArea>
              <CardMedia
                alt="MIS Interview"
                height="140"
                image={misImage}
                component="img"
              />
              <CardContent>
                <Typography gutterBottom variant="h5">
                  MGUIDE Product Interview
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  Interview with "Dentistry Today" about MGUIDE
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                onClick={() => handleOpen("mis")}
                size="small"
                color="primary"
              >
                Watch
              </Button>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={openMis}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                  timeout: 500,
                }}
              >
                <Fade in={openMis}>
                  <div className={classes.paper}>
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/FMZMqwBGdSU"
                      title="YouTube video player"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </Fade>
              </Modal>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Bonus;
