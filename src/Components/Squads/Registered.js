import React from "react";
import Firestore from "./../../Utils/Firestore";
import { List, ListItem, ListItemText, Container, Fab, AppBar, Toolbar, Typography } from "@material-ui/core";
import { Add } from "@material-ui/icons";

export default function Registered(props) {
  const [data, setFBData] = React.useState(false);
  const {changePage} = props
  React.useEffect(() => {
    const unsubscribe = Firestore.firestore()
      .collection("TaiwanaReg")
      .onSnapshot(snapshot => {
        const newSquad = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFBData(newSquad);
      });

    return () => unsubscribe;
  }, []);
  return (
    <div style={{ width: "100vw" }}>
      <Container style={{ padding: "0" }} maxWidth="sm">
      <AppBar position="static" color="default">
            <Toolbar>
              <Typography>Registered Squads</Typography>
            </Toolbar>
          </AppBar>
        <List>
          {data
            ? data.map(squad => (
                <ListItem key={squad.SquadName} divider>
                  <ListItemText
                    primary={squad.SquadName}
                    secondary={
                      squad.cap.name +
                      ", " +
                      squad.ass.name +
                      ", " +
                      squad.new.name
                    }
                  />
                </ListItem>
              ))
            : null}
        </List>
        <Fab
              onClick={() => changePage("Register")}
              style={{
                margin: 0,
                top: "auto",
                right: 20,
                bottom: 20,
                left: "auto",
                position: "fixed"
              }}
              color="secondary"
            >
              <Add />
            </Fab>
      </Container>
    </div>
  );
}
