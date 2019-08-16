import React from "react";
import HomeImage from "../Assets/Tourney3.png";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Info from "@material-ui/icons/Info";

import Container from "@material-ui/core/Container"
import { SentimentVerySatisfied } from "@material-ui/icons";

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
const strings= [
  {"Q":"What?","A":"Ultimate Frisbee on the Beach!","page":"HowToPlay"},
  {"Q":"When?","A":"Friday, September 13th","page":"Schedule"},
  {"Q":"Where?","A":"Qijin Beach, Kaohsiung","page":"Location"},
  {"Q":"Why?","A":"Play/Learn Ultimate, meet new people, and enjoy the beach!","page":"HowToPlay"},
  {"Q":"Who","A":"YOU!","page":""},
  {"Q":"How?","A":"Sign-up or find your squad here!","page":"Squads"}
]

export default function InteractiveList(props) {
  const classes = useStyles();
  const { changePage } = props;

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
            <List>
              {strings.map(string=>(
                <ListItem divider button onClick={string.page?() => changePage(string.page):null}>
                  {string.page?<ListItemIcon>
                  <Info />
                </ListItemIcon>:<ListItemIcon>
                  <SentimentVerySatisfied />
                </ListItemIcon>}
                <ListItemText
                  primary={string.Q}
                  secondary={string.A}
                />
                
              </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
    </Container>
    </div>
    
  );
}
