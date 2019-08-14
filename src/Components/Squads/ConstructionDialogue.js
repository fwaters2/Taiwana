import React from "react";
//import { makeStyles } from "@material-ui/core/styles";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
//import { blue } from "@material-ui/core/colors";
import { DialogContentText, DialogContent } from "@material-ui/core";

// const useStyles = makeStyles({
//   avatar: {
//     backgroundColor: blue[100],
//     color: blue[600]
//   }
// });

export default function SimpleDialog(props) {
  //const classes = useStyles();
  const { onClose, selectedValue, open } = props;

  function handleClose() {
    onClose(selectedValue);
  }

  // function handleListItemClick(value) {
  //   onClose(value);
  // }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title">Under Construction!</DialogTitle>
      <DialogContent>
        <DialogContentText>
          This is just a demo, but hopefully we can get it up and running soon
          to help out our stragglers!
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
}
