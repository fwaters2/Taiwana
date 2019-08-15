import React from "react";
import HomeImage from "../Assets/Tourney2.png";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import AccessTime from "@material-ui/icons/AccessTime";
import Place from "@material-ui/icons/Place";
import Group from "@material-ui/icons/Group";
import Info from "@material-ui/icons/Info";
import School from "@material-ui/icons/School";
import Container from "@material-ui/core/Container"

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function InteractiveList(props) {
  const classes = useStyles();
  const { langStrings, changePage } = props;

  return (
    
    <div style={{width:"100vw"}}>
      <Container maxWidth="md" style={{padding:"0"}}>
      <img width="100%" src={HomeImage} alt="Home" />
      </Container>
      <Container maxWidth="md">
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div className={classes.demo}>
            <List dense>
              <ListItem button onClick={() => changePage("Squads")}>
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
                <ListItemText
                  primary={langStrings.Squads}
                  secondary="Check your squad is registered or find teammates!"
                />
              </ListItem>
              <ListItem button onClick={() => changePage("Schedule")}>
                <ListItemIcon>
                  <AccessTime />
                </ListItemIcon>
                <ListItemText
                  primary={langStrings.Schedule}
                  secondary={langStrings.Date}
                />
              </ListItem>
              <ListItem button onClick={() => changePage("Location")}>
                <ListItemIcon>
                  <Place />
                </ListItemIcon>
                <ListItemText
                  primary={langStrings.Location}
                  secondary={langStrings.QijinBar}
                />
              </ListItem>
              <ListItem button onClick={() => changePage("HowToPlay")}>
                <ListItemIcon>
                  <School />
                </ListItemIcon>
                <ListItemText
                  primary={langStrings.HowToPlay}
                  secondary="Info on the sport of Ultimate"
                />
              </ListItem>
              <ListItem button onClick={() => changePage("FAQ")}>
                <ListItemIcon>
                  <Info />
                </ListItemIcon>
                <ListItemText
                  primary={langStrings.FAQ}
                  secondary="Everything You Need to Know!"
                />
              </ListItem>
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
    </Container>
    </div>
    
  );
}
