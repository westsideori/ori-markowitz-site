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

const Projects = () => {
  return (
    <Box>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={12} sm={8} md={6}>
          <Card>
            <CardActionArea>
              <CardMedia
                alt="RosterMonster"
                height="140"
                image={rosterMonsterImage}
              ></CardMedia>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Projects;
