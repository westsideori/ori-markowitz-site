import React from "react";
import { useState } from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  Avatar,
  Divider,
  List,
  Typography,
  Box,
  ListItemIcon,
  Drawer,
} from "@material-ui/core";
import {
  ArrowBack,
  AssignmentInd,
  Home,
  Apps,
  ContactMail,
  Menu,
  Star,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import { Link } from "react-router-dom";
import avatar from "../oripic1.jpeg";

const useStyles = makeStyles((theme) => ({
  menuContainer: {
    width: 250,
    height: "100%",
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

const NavBar = () => {
  const [sideBarOpen, setSideBarOpen] = useState({
    left: false,
  });

  const classes = useStyles();

  const toggleSideBar = (slider, open) => {
    setSideBarOpen({ ...sideBarOpen, [slider]: open });
  };

  const menuItems = [
    {
      listIcon: <Home />,
      listText: "Home",
      listPath: "/",
    },
    {
      listIcon: <AssignmentInd />,
      listText: "Resume",
      listPath: "/resume",
    },
    {
      listIcon: <Apps />,
      listText: "Projects",
      listPath: "/projects",
    },
    {
      listIcon: <ContactMail />,
      listText: "Contact",
      listPath: "/contact",
    },
    {
      listIcon: <Star />,
      listText: "Bonus",
      listPath: "/bonus",
    },
  ];

  const menuItemsList = menuItems.map((item, key) => {
    return (
      <ListItem button key={key} component={Link} to={item.listPath}>
        <ListItemIcon>{item.listIcon}</ListItemIcon>
        <ListItemText primary={item.listText} />
      </ListItem>
    );
  });

  const sideBar = (slider) => (
    <Box
      className={classes.menuContainer}
      onClick={() => toggleSideBar(slider, false)}
    >
      <Avatar className={classes.avatar} src={avatar} alt="Avatar" />
      <Divider />
      <List>{menuItemsList}</List>
    </Box>
  );

  return (
    <>
      <div>
        <Box component="nav">
          <AppBar position="static">
            <Drawer
              open={sideBarOpen.left}
              onClose={() => toggleSideBar("left", false)}
              anchor="left"
            >
              {sideBar("left")}
            </Drawer>
            <Toolbar>
              <IconButton onClick={() => toggleSideBar("left", true)}>
                <Menu style={{ color: "white" }} />
              </IconButton>
              <Typography variant="h5">Ori Markowitz</Typography>
            </Toolbar>
          </AppBar>
        </Box>
      </div>
      <br></br>
    </>
  );
};

export default NavBar;
