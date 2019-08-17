import React from "react";
import HelpPlayer from "./HelpPlayer";
import {
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  Typography,
  Container,
  FormHelperText,
  ButtonGroup,
  Dialog,
  DialogTitle,
  DialogContent
} from "@material-ui/core";
import Firestore from "./../../Utils/Firestore";
import HelpMeDialog from "./HelpMeDialog";

export default function HelpUs(props) {
  const [open, setOpen] = React.useState(false);
  const [openResult, setOpenResult] = React.useState(false);
  const [result, changeResult] = React.useState(
    "Sorry, Please enter ALL information"
  );
  const [values, updateValues] = React.useState({
    nameCap: "",
    nameAss: "",

    genderCap: "",
    genderAss: "",

    newbieCap: false,
    newbieAss: false,

    contactInfo: "",
    description: ""

  });
  const { changePage } = props;
  const handleChange = (e, item) => {
    updateValues({ ...values, [item]: e.target.value });
  };
  const handleGenderCap = (event, newGender) => {
    updateValues({
      ...values,
      genderCap: newGender
    });
  };
  const handleGenderAss = (event, newGender) => {
    updateValues({
      ...values,
      genderAss: newGender
    });
  };

  const handleNewbieCap = e => {
    updateValues({
      ...values,
      newbieCap: !values.newbieCap
    });
  };
  const handleNewbieAss = e => {
    updateValues({
      ...values,
      newbieAss: !values.newbieAss
    });
  };


  function handleClickOpen() {
    setOpen(true);
  }

  function handleClickOpenResult() {
    setOpenResult(true);
  }

  const handleClose = value => {
    setOpen(false);
  };

  function handleCloseResult() {
    result === "Success" ? changePage("Squads") : changePage("HelpMe");
    setOpenResult(false);
  }

  const handleSubmit = () => {
      console.log(values)
    handleClickOpenResult();
    const approved = () => {
      let newHelp = {
        Description: values.description,
         ContactInfo: values.contactInfo,
        cap: {
          name: values.nameCap,
          gender: values.genderCap,
          newbie: values.newbieCap
        },
        ass: {
          name: values.nameAss,
          gender: values.genderAss,
          newbie: values.newbieAss
        },
      };
      Firestore.firestore().collection("TaiwanaHelp").add(
        newHelp
      )
      changeResult("Success");
      
    };
    
    values.nameCap != "" &&
    values.nameAss != "" &&

    values.genderCap != "" &&
    values.genderAss != "" &&
    values.contactInfo != ""

      ? approved()
      : changeResult("Error");
  };
  return (
    <div style={{ width: "100vw" }}>
      <Container maxWidth="md">
        <Paper>
          <List>
            <Typography variant="h5" align="center" gutterBottom>
             We need 1!
            </Typography>
            <ListItem divider key="Cap">
              <HelpPlayer
                values={values}
                handleChange={handleChange}
                handleGender={handleGenderCap}
                handleNewbie={handleNewbieCap}
                player="Cap"
              />
            </ListItem>
            <ListItem divider key="Ass">
              <HelpPlayer
                values={values}
                handleChange={handleChange}
                handleGender={handleGenderAss}
                handleNewbie={handleNewbieAss}
                player="Ass"
              />
            </ListItem>
          </List>
          <TextField
              label="How to contact you"
              fullWidth
              variant="filled"
              value={values.description}
              onChange={e => handleChange(e, "description")}
            />
          <TextField
              
              label="(Optional) Short Description of yourself or who you'd want to play with"
              fullWidth
              rows="4"
              multiline
              value={values.contactInfo}
              onChange={e => handleChange(e, "contactInfo")}
            />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit Request
          </Button>
            <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={()=>changePage("Squads")}
          >
            Back
          </Button>
          <HelpMeDialog
            open={openResult}
            onClose={handleCloseResult}
            result={result}
          />
        </Paper>
      </Container>
    </div>
  );
}