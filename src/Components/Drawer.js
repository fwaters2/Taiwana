import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import {
  Map,
  AccessTime,
  Place,
  Group,
  Info,
  School,
  Home,
  AttachMoney,
  BeachAccess,
  DirectionsBoat,
  LiveHelp
} from "@material-ui/icons";

import Router from "../Router";
import { FormControlLabel, Switch, Container } from "@material-ui/core";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "space-between"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  },
  title: {
    flexGrow: 1
  }
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const {
    currentPage,
    changePage,
    currentLang,
    langStrings,
    toggleLang
  } = props;

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {langStrings[currentPage]}
          </Typography>
          <FormControlLabel
            control={
              <Switch
                checked={currentLang === "ch"}
                onChange={toggleLang}
                color="secondary"
              />
            }
            label="中文"
          />
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        <div className={classes.drawerHeader}>
          <Typography>{langStrings.Taiwana} 2019</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          <ListItem button onClick={() => changePage("Home")} key="Home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary={langStrings.Home} />
          </ListItem>
          <ListItem button onClick={() => changePage("Squads")} key="Squads">
            <ListItemIcon>
              <Group />
            </ListItemIcon>
            <ListItemText primary={langStrings.Squads} />
          </ListItem>
          <ListItem
            button
            onClick={() => changePage("HowToPlay")}
            key="How To Play"
          >
            <ListItemIcon>
              <School />
            </ListItemIcon>
            <ListItemText primary={langStrings.HowToPlay} />
          </ListItem>
          <ListItem
            button
            onClick={() => changePage("Schedule")}
            key="Schedule"
          >
            <ListItemIcon>
              <AccessTime />
            </ListItemIcon>
            <ListItemText primary={langStrings.Schedule} />
          </ListItem>
          <ListItem
            button
            onClick={() => changePage("Location")}
            key="Location"
          >
            <ListItemIcon>
              <Place />
            </ListItemIcon>
            <ListItemText primary={langStrings.Location} />
          </ListItem>
          <ListItem button onClick={() => changePage("Transportation")} key="Transportation">
            <ListItemIcon>
              <DirectionsBoat />
            </ListItemIcon>
            <ListItemText primary={langStrings.Transportation} />
          </ListItem>
          
          <ListItem button onClick={() => changePage("FAQ")} key="FAQ">
            <ListItemIcon>
              <LiveHelp />
            </ListItemIcon>
            <ListItemText primary={langStrings.FAQ} />
          </ListItem>
          <Divider />
          <ListItem button onClick={() => changePage("Map")} key="Map">
            <ListItemIcon>
              <Map />
            </ListItemIcon>
            <ListItemText primary={langStrings.Map} />
          </ListItem>
          <ListItem button onClick={() => changePage("WhatToBring")} key="WhatToBring">
            <ListItemIcon>
              <BeachAccess />
            </ListItemIcon>
            <ListItemText primary={langStrings.WhatToBring} />
          </ListItem>
          <ListItem button onClick={() => changePage("AboutUs")} key="AboutUs">
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary={langStrings.AboutUs} />
          </ListItem>
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open
        })}
      >
        <div className={classes.drawerHeader} />
        <Container maxWidth="md">
          <Router
            langStrings={langStrings}
            currentPage={currentPage}
            changePage={changePage}
          />
        </Container>
      </main>
    </div>
  );
}
