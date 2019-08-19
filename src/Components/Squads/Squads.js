import React from "react";
import { Container, AppBar, Toolbar, Typography, Fab} from "@material-ui/core";
import HelpList from "./HelpList";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  buttonSpace:{ 
    ...theme.mixins.toolbar,
  },
}));

export default function InteractiveList(props) {
  const { langStrings, changePage } = props;
  const classes = useStyles();

  return (
    <div style={{ width: "100vw" }}>
      <Container style={{ padding: "0" }} maxWidth="sm">
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography>{langStrings.FindTeammates}</Typography>
          </Toolbar>
        </AppBar>
        <HelpList langStrings={langStrings}/>
        <Fab
            variant="extended"
            onClick={() => changePage("HelpTabs")}
            style={{
              margin: 0,
              top: "auto",
              width: "80%",
              maxWidth: "500px",
              bottom: 20,
              left: "50%",
              transform: "translate(-50%, 0)",
              position: "fixed"
            }}
            color="primary"
          >
            {langStrings.CreateListing}
          </Fab>
          <div className={classes.buttonSpace}/>
      </Container>
    </div>
  );
}
