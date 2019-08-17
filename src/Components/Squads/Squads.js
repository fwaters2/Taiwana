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
import { Tabs, Tab, Box, Container, Fab} from "@material-ui/core";
import Registered from "./Registered";
import { Add } from "@material-ui/icons";
import HelpList from "./HelpList";

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
  const [tabValue, changeTabValue] = React.useState(0);
  const [open, setOpen] = React.useState(false);
  const { langStrings, changePage } = props;

  const handleClose = value => {
    setOpen(false);
  };
  const toggleTab = () => {
    tabValue === 0 ? changeTabValue(1) : changeTabValue(0);
  };

  return (
    <div style={{ width: "100vw" }}>
      <Container style={{ padding: "0" }} maxWidth='sm'>
        <div className={classes.root}>
          <ConstructionDialogue open={open} onClose={handleClose} />

          <AppBar position="static" color="default">
            <Toolbar>
              <Tabs
                value={tabValue}
                onChange={toggleTab}
                aria-label="simple tabs example"
              >
                <Tab
                  label={langStrings.FindTeammates}
                  id="simple-tab-0"
                  aria-controls="simple-tabpanel-0"
                />
                <Tab
                  label="Registered"
                  id="simple-tab-1"
                  aria-controls="simple-tabpanel-1"
                />
              </Tabs>
            </Toolbar>
          </AppBar>
          
          <Typography
            component="div"
            role="tabpanel"
            hidden={tabValue !== 0}
            id="simple-tabpanel-1"
            aria-labelledby="simple-tab-1"
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div className={classes.demo}>
                  <HelpList />
                </div>
              </Grid>
            </Grid>
            <AddButton changePage={changePage}/>
          </Typography>
          
          <Typography
            component="div"
            role="tabpanel"
            hidden={tabValue !== 1}
            id="simple-tabpanel-1"
            aria-labelledby="simple-tab-1"
          >
            <Registered />
            <Fab
                  onClick={()=>changePage("Register")}
                  style={{
                    margin: 0,
                    top: "auto",
                    right: 20,
                    bottom: 20,
                    left: "auto",
                    position: "fixed"
                  }}
                  color="secondary"
                ><Add /></Fab>
          </Typography>
        </div>
      </Container>
    </div>
  );
}
