import React from "react";
import Firestore from "./../../Utils/Firestore";
import Group from "@material-ui/icons/Group";
import {
  List,
  ListItem,
  ListItemIcon,
  Typography,
  Box
} from "@material-ui/core";
import { AccessibilityNew } from "@material-ui/icons";

export default function HelpList() {
  const [data, setFBData] = React.useState(false);
  React.useEffect(() => {
    const unsubscribe = Firestore.firestore()
      .collection("TaiwanaHelp")
      .onSnapshot(snapshot => {
        const newSquad = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFBData(newSquad);
      });

    return () => unsubscribe;
  }, []);

  function singlePrimary(name, gender, newbie) {
    let funGender = gender === "Male" ? "Guy" : "Lady";
    return (
      (newbie ? "New " : "") + funGender + " needs a Squad! (" + name + ")"
    );
  }

  function groupPrimary(cName, cGender, cNewbie, aName, aGender, aNewbie) {
    let needNew = !cNewbie && !aNewbie;
    let needGender =
      cGender !== aGender ? "Person" : cGender === "Male" ? "Lady" : "Dude";
    return (
      "Need a " +
      (needNew ? "New " : " ") +
      needGender +
      " (" +
      cName +
      " & " +
      aName +
      ")"
    );
  }

  return (
    <List>
      {data
        ? data.map(help => (
            <ListItem key={help.ContactInfo} divider>
              {help.cap ? (
                <ListItemIcon>
                  <Group />
                </ListItemIcon>
              ) : (
                <ListItemIcon>
                  <AccessibilityNew />
                </ListItemIcon>
              )}
              <Box>
              <Typography color='primary'  variant ="h6">
                {
                  help.cap
                    ? groupPrimary(
                        help.cap.name,
                        help.cap.gender,
                        help.cap.newbie,
                        help.ass.name,
                        help.ass.gender,
                        help.ass.newbie
                      )
                    : singlePrimary(
                        help.ass.name,
                        help.ass.gender,
                        help.ass.newbie
                      )
                }
              </Typography>
              <Typography paragraph variant = 'caption'>
              {help.Description}
              </Typography>
              <Typography color ='secondary' variant = 'subtitle2'>
              {"Contact Me: " +help.ContactInfo}
              </Typography>
              </Box>
            </ListItem>
          ))
        : null}
    </List>
  );
}
