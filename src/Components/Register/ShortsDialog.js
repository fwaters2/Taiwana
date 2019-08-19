import React from "react";
import { Dialog, DialogTitle, DialogContent } from "@material-ui/core";
import SizeChart from "../../Assets/shortSizing.PNG";

export default function ShortsDialog(props) {
  const { onClose, open, langStrings } = props;

  function handleClose() {
    onClose();
  }

  return (
    <Dialog
      onClose={handleClose}
      aria-labelledby="simple-dialog-title"
      open={open}
    >
      <DialogTitle align='center' id="simple-dialog-title">{langStrings.Shorts}</DialogTitle>
      <DialogContent>
        <img src={SizeChart} alt="size-chart" />
      </DialogContent>
    </Dialog>
  );
}