import React from "react";
import { Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, ListItemIcon, Button, ButtonGroup } from "@material-ui/core";
import { Wc, AccessibilityNew } from "@material-ui/icons";

export default function ReqDialog(props) {
  const { onClose, open, changePage, langStrings } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" align='center'>{langStrings.SquadRequirements}</DialogTitle>
      <DialogContent>
        <List>
            <ListItem>
                <ListItemIcon>
                    <Wc />
                </ListItemIcon>
                <ListItemText primary={langStrings.OneGender} />
            </ListItem>
            <ListItem>
            <ListItemIcon>
                    <AccessibilityNew />
                </ListItemIcon>
                <ListItemText primary={langStrings.NewToUltimate} />
            </ListItem>
        </List>
        <ButtonGroup fullWidth>
        <Button variant='contained' color='secondary' onClick={handleClose}>{langStrings.Ready}</Button>
        <Button variant='contained' color='primary' onClick={()=>changePage("Squads")}>{langStrings.FindTeammates}</Button>
        
        </ButtonGroup>
      </DialogContent>
    </Dialog>
  );
}