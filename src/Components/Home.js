import React from "react";
import HomeImage from "../Assets/Tourney3.png";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Info from "@material-ui/icons/Info";
import Container from "@material-ui/core/Container";
import { SentimentVerySatisfied } from "@material-ui/icons";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  },
  buttonSpace:{ 
    ...theme.mixins.toolbar,
  },
}));

export default function InteractiveList(props) {
  const classes = useStyles();
  const { changePage, langStrings } = props;

  return (
    <div style={{ width: "100vw" }}>
      <Container maxWidth="md" style={{ padding: "0" }}>
        <img width="100%" src={HomeImage} alt="Home" />
      </Container>
      <Container maxWidth="md">
        <div className={classes.demo}>
          <List>
            {langStrings.HomeStrings.map(string => (
              <ListItem
                key={string.Q}
                divider
                button
                onClick={string.page ? () => changePage(string.page) : null}
              >
                {string.page ? (
                  <ListItemIcon>
                    <Info />
                  </ListItemIcon>
                ) : (
                  <ListItemIcon>
                    <SentimentVerySatisfied />
                  </ListItemIcon>
                )}
                <ListItemText primary={string.Q} secondary={string.A} />
              </ListItem>
            ))}
          </List>
          
           
          <Fab
            variant="extended"
            onClick={() => changePage("Register")}
            style={{
              margin: 0,
              top: "auto",
              width: "40%",
              maxWidth: "500px",
              bottom: 20,
              left: 20,
              
              position: "fixed"
            }}
            color="secondary"
          >
            {langStrings.Register}
          </Fab>
          <Fab
            variant="extended"
            onClick={() => changePage("Squads")}
            style={{
              margin: 0,
              top: "auto",
              width: "40%",
              maxWidth: "500px",
              bottom: 20,
              right: 20,
             
              position: "fixed"
            }}
            color="primary"
          >
            {langStrings.FindTeammates}
          </Fab>
         
        </div>
        <div className={classes.buttonSpace}/>
      </Container>
    </div>
  );
}
