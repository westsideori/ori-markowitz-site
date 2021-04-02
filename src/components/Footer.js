import React from "react";
import {
  makeStyles,
  BottomNavigation,
  BottomNavigationAction,
} from "@material-ui/core";
import GitHub from "@material-ui/icons/GitHub";
import LinkedIn from "@material-ui/icons/LinkedIn";
import Medium from "../medium.svg";
import Book from "@material-ui/icons/Book";

const useStyles = makeStyles({
  root: {
    "& .MuiBottomNavigationAction-root": {
      minWidth: 0,
      maxWidth: 250,
    },
  },
});

const Footer = () => {
  const classes = useStyles();

  return (
    <BottomNavigation width="auto">
      <a
        href="https://github.com/westsideori?tab=repositories"
        target="_blank"
        rel="noreferrer"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<GitHub />}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/ori-markowitz-a321b353/"
        target="_blank"
        rel="noreferrer"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<LinkedIn />}
        />
      </a>
      <a
        href="https://ori-markowitz.medium.com/"
        target="_blank"
        rel="noreferrer"
      >
        <BottomNavigationAction
          className={classes.root}
          style={{ padding: 0 }}
          icon={<Book />}
        />
      </a>
    </BottomNavigation>
  );
};

export default Footer;
