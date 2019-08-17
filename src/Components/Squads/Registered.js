import React from "react";
import Firestore from './../../Utils/Firestore'
import { List, ListItem, ListItemText, Button } from "@material-ui/core";

export default function Registered() {
    const [data, setFBData] = React.useState(false)
    React.useEffect(() => {
      const unsubscribe = 
        Firestore.firestore().collection("TaiwanaReg").onSnapshot(snapshot => {
          const newSquad = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          }));
          setFBData(newSquad);
        });
        
        return () => unsubscribe
    }, [])
  return (
      <List>
         
          {data?data.map(squad=>(
              <ListItem key={squad.SquadName} divider>
                  <ListItemText
                    primary={squad.SquadName}
                    secondary = {squad.cap.name + ", " + squad.ass.name + ", " + squad.new.name}
                    />
              </ListItem>
          )):null}
      </List>
      
  )
}
