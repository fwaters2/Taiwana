import React from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import Single from "@material-ui/icons/AccessibilityNew";
import Group from "@material-ui/icons/Group";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import AddButton from "./AddButton";
import ConstructionDialogue from "./ConstructionDialogue";
import { Tabs, Tab, Box } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752
  },
  demo: {
    backgroundColor: theme.palette.background.paper
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: 200
    }
  },
  title: {
    margin: theme.spacing(4, 0, 2)
  }
}));

export default function InteractiveList(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const { langStrings } = props;

  const handleClose = value => {
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <ConstructionDialogue open={open} onClose={handleClose} />

      <AppBar position="static" color="default">
        <Toolbar>
          <Tabs
   

            value={0}
            //onChange={handleChange}
            aria-label="simple tabs example"
          >
            <Tab
              label={langStrings.FindTeammates}
              id="simple-tab-0"
              aria-controls="simple-tabpanel-0"
            />
            <Tab
              label="Register Squad"
              id="simple-tab-1"
              aria-controls="simple-tabpanel-1"
            />
          </Tabs>
        </Toolbar>
      </AppBar>
      <Typography
        component="div"
        role="tabpanel"
        hidden={false}
        //{value !== index}
        id="simple-tabpanel-1"
        aria-labelledby="simple-tab-1"
      >
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <div className={classes.demo}>
              <List dense>
                <ListItem>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText
                    primary="Boom Squad"
                    secondary="Jack and Neal here looking for a lady to complete our squad!"
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Single />
                  </ListItemIcon>
                  <ListItemText
                    primary="Michael"
                    secondary="New player looking for teammates!"
                  />
                </ListItem>
              </List>
            </div>
          </Grid>
        </Grid>
        <AddButton />
      </Typography>

      <Typography
        component="div"
        role="tabpanel"
        hidden={true}
        //{value !== index}
        id="simple-tabpanel-1"
        aria-labelledby="simple-tab-1"
      >
        <Box p={3}>Nothing Yet</Box>
      </Typography>
    </div>
  );
}
