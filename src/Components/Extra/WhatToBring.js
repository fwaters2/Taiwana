import React from "react";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  makeStyles
} from "@material-ui/core";
import {
  WbSunny,
  Fastfood,
  Pool,
  LocalDrink,
  DirectionsRun
} from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    maxWidth: 360
    //backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: "inline"
  }
}));
export default function WhatToBring() {
  const classes = useStyles();
  const listItems = [
    {
      title: "SUNSCREEN",
      text: "(UV rays still go straight through clouds)",
      icon: <WbSunny />
    },
    {
      title: "Waterbottle",
      text:
        "We will be supplied bottle of water there, but please bring your own as well to help us reduce waste!",
      icon: <LocalDrink />
    },
    {
      title: "Change of clothes/towel",
      text:
        "Beach frisbee is a sandy business and might get a bit wet as well!",
      icon: <Pool />
    },
    {
      title: "Socks",
      text:
        "If it turns out to be hot and sunny, you might want to bring some foot protection for that black, heat-absorbent sand",
      icon: <DirectionsRun />
    },
    {
      title: "Food/Drink",
      text:
        "Stay hydrated and energized! However, if you forget, there is a bar and seafood market right next to the fields!",
      icon: <Fastfood />
    }
  ];
  return (
    <div style={{ width: "100vw" }}>
      <Container maxWidth="sm">
        <List>
          {listItems.map(item => (
            <ListItem>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText
                primary={item.title}
                secondary={
                  <React.Fragment>
                    <Typography
                      component="span"
                      variant="body2"
                      className={classes.inline}
                      color="textPrimary"
                    >
                      {item.text}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
    </div>
  );
}
