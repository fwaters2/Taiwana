import React from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core/";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
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
  const mainPages = [
    { key: "Home", icon: <Home /> },
    { key: "Squads", icon: <Group /> },
    { key: "HowToPlay", icon: <School /> },
    { key: "Schedule", icon: <AccessTime /> },
    { key: "Location", icon: <Place /> },
    { key: "Transportation", icon: <DirectionsBoat /> },
    { key: "FAQ", icon: <LiveHelp /> }
  ];
  const extraPages = [
    { key: "Map", icon: <Map /> },
    { key: "WhatToBring", icon: <BeachAccess /> },
    { key: "AboutUs", icon: <Info /> }
  ];

  function handleDrawerOpen() {
    setOpen(true);
  }

  function handleDrawerClose() {
    setOpen(false);
  }
  function handleClick(e) {
    let page = e.currentTarget.getAttribute("data-key");
    changePage(page);
    handleDrawerClose();
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
          {mainPages.map(page => (
            <ListItem
              button
              onClick={handleClick}
              key={page.key}
              data-key={page.key}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={langStrings[page.key]} />
            </ListItem>
          ))}

          <Divider />
          {extraPages.map(page => (
            <ListItem
              button
              onClick={handleClick}
              key={page.key}
              data-key={page.key}
            >
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemText primary={langStrings[page.key]} />
            </ListItem>
          ))}
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
