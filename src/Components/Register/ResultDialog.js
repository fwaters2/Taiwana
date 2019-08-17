import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";


export default function ReqDialog(props) {
  const { onClose, open, result } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle id="simple-dialog-title" align='center'>Result</DialogTitle>
      <DialogContent>
    {result}
      </DialogContent>
    </Dialog>
  );
}