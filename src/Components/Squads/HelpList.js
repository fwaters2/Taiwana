import React from "react";
import Firestore from "./../../Utils/Firestore";
import Single from "@material-ui/icons/AccessibilityNew";
import Group from "@material-ui/icons/Group";
import {
  List,
  ListItem,
  ListItemText,
  Button,
  ListItemIcon
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
  const helpArray = [
    {
      Description: "",
      ContactInfo: "",
      cap: {
        name: "",
        gender: "",
        newbie: ""
      },
      ass: {
        name: "",
        gender: "",
        newbie: ""
      }
    }
  ];
  function singlePrimary(name, gender, newbie) {
    let funGender = gender === "Male" ? "Guy" : "Lady";
    return (
      (newbie ? "New " : "") + funGender + " needs a Squad! (" + name + ")"
    );
  }

  function groupPrimary(cName, cGender, cNewbie, aName, aGender, aNewbie) {
      let isOneExp = cNewbie && aNewbie
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
  function Secondary(desc, cInfo) {
    return cInfo + " " + desc;
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
              <ListItemText
                primary={
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
                secondary={Secondary(help.Description, help.ContactInfo)}
              />
            </ListItem>
          ))
        : null}
    </List>
  );
}
