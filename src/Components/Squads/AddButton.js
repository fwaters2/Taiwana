import clsx from "clsx";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";

import NewSquadPost from "./NewSquadPost";
import { AccessibilityNew, GroupAdd, PersonAdd } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  controls: {
    margin: theme.spacing(3)
  },
  exampleWrapper: {
    position: "relative",
    height: 380
  },
  radioGroup: {
    margin: theme.spacing(1, 0)
  },
  speedDial: {
    position: "absolute",
    "&$directionUp": {
      bottom: theme.spacing(2),
      right: theme.spacing(3)
    }
  },
  directionUp: {}
}));

const actions = [
  { icon: <NewSquadPost need="Team" />, name: "Looking for team" },
  { icon: <NewSquadPost need="Ind" />, name: "Looking for one more" }
];

export default function AddButton(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { changePage } = props

  const handleClick = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const speedDialClassName = clsx(classes.speedDial, classes[`directionUp`]);

  return (
    <div className={classes.root}>
      <div className={classes.exampleWrapper}>
        <SpeedDial
          ariaLabel="SpeedDial example"
          className={speedDialClassName}
          icon={<AccessibilityNew />}
          onBlur={handleClose}
          onClick={handleClick}
          onClose={handleClose}
          onFocus={handleOpen}
          onMouseEnter={handleOpen}
          onMouseLeave={handleClose}
          open={open}
          direction="up"
          style={{
            margin: 0,
            top: "auto",
            right: 20,
            bottom: 20,
            left: "auto",
            position: "fixed"
          }}
        >
          <SpeedDialAction
            key="PersonAdd"
            icon={<PersonAdd />}
            tooltipTitle="I need a Squad!"
            onClick={()=>changePage("HelpMe")}
          />
          <SpeedDialAction
            key="GroupAdd"
            icon={<GroupAdd />}
            tooltipTitle="We need One!"
            onClick={()=>changePage("HelpUs")}
          />
        </SpeedDial>
      </div>
    </div>
  );
}
