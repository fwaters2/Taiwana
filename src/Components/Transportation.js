import React from "react";
import { makeStyles } from "@material-ui/styles";
import {
  Typography,
  Container,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from "@material-ui/core";
import { DirectionsWalk, Motorcycle, LocalTaxi } from "@material-ui/icons";

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

export default function Transportation() {
  const classes = useStyles();
  return (
    <div style={{ width: "100vw" }}>
      <Container maxWidth="sm">
        <List>
          <ListItem>
            <ListItemIcon>
              <DirectionsWalk />
            </ListItemIcon>
            <ListItemText
              primary="Walking"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    ~40mins from Kaohsiung Main Station: Take MRT to the
                    Sizihwan stop and walk to the Gushan Ferry. On arrival, walk
                    through the night market till you get to the beach
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <Motorcycle />
            </ListItemIcon>
            <ListItemText
              primary="Scooter"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Go to the Gushan Ferry and follow the same directions as the
                    walkers
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <LocalTaxi />
            </ListItemIcon>
            <ListItemText
              primary="Taxi/Uber"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    className={classes.inline}
                    color="textPrimary"
                  >
                    Gushan Ferry! Follow the same directions as the walkers
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Container>
    </div>
  );
}
