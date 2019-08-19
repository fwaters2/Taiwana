import React from "react";
import HelpPlayer from "./HelpPlayer";
import {
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  Typography,
  Container
} from "@material-ui/core";
import Firestore from "./../../Utils/Firestore";
import HelpMeDialog from "./HelpMeDialog";

export default function HelpUs(props) {
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
  const { changePage, langStrings } = props;
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

  function handleClickOpenResult() {
    setOpenResult(true);
  }

  function handleCloseResult() {
    result === "Success" ? changePage("Squads") : changePage("HelpUs");
    setOpenResult(false);
  }
  function handleBack() {
    changePage("Squads");
  }

  const handleSubmit = () => {
    console.log(values);
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
        }
      };
      Firestore.firestore()
        .collection("TaiwanaHelp")
        .add(newHelp);
      changeResult("Success");
    };

    values.nameCap !== "" &&
    values.nameAss !== "" &&
    values.genderCap !== "" &&
    values.genderAss !== "" &&
    values.contactInfo !== ""
      ? approved()
      : changeResult("Error");
  };
  return (
    <div style={{ width: "100vw" }}>
      <Container maxWidth="md">
        <Paper>
          <List>
            <Typography variant="h5" align="center" gutterBottom>
              {langStrings.SquadLooking}
            </Typography>
            <ListItem divider key="Cap">
              <HelpPlayer
              langStrings={langStrings}
                values={values}
                handleChange={handleChange}
                handleGender={handleGenderCap}
                handleNewbie={handleNewbieCap}
                player="Cap"
              />
            </ListItem>
            <ListItem divider key="Ass">
              <HelpPlayer
              langStrings={langStrings}
                values={values}
                handleChange={handleChange}
                handleGender={handleGenderAss}
                handleNewbie={handleNewbieAss}
                player="Ass"
              />
            </ListItem>
          </List>
          <TextField
            label={langStrings.HowToContactYou}
            fullWidth
            variant="filled"
            value={values.contactInfo}
            onChange={e => handleChange(e, "contactInfo")}
          />
          <TextField
            label={langStrings.ShortDescription}
            fullWidth
            variant="filled"
            rows="4"
            multiline
            value={values.description}
            onChange={e => handleChange(e, "description")}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            {langStrings.SubmitListing}
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleBack}
          >
           {langStrings.Back}
          </Button>
          <HelpMeDialog
          langStrings={langStrings}
            open={openResult}
            onClose={handleCloseResult}
            result={result}
          />
        </Paper>
      </Container>
    </div>
  );
}
