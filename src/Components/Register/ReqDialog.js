import React from "react";
import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, ListItemIcon, Button } from "@material-ui/core";
import { Wc, AccessibilityNew } from "@material-ui/icons";

export default function ReqDialog(props) {
  const { onClose, open, changePage } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" align='center'>Squad Requirements</DialogTitle>
      <DialogContent>
        <List>
            <ListItem>
                <ListItemIcon>
                    <Wc />
                </ListItemIcon>
                <ListItemText primary="One of Each Gender" />
            </ListItem>
            <ListItem>
            <ListItemIcon>
                    <AccessibilityNew />
                </ListItemIcon>
                <ListItemText primary="A Player New to Ultimate" />
            </ListItem>
        </List>
        <Button variant='contained' onClick={()=>changePage("Squads")}>Looking for a teamate?</Button>
      </DialogContent>
    </Dialog>
  );
}