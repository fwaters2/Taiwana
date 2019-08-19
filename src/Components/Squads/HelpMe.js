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

export default function HelpMe(props) {
  const [openResult, setOpenResult] = React.useState(false);
  const [result, changeResult] = React.useState(
    "Sorry, Please enter ALL information"
  );
  const [values, updateValues] = React.useState({
    nameAss: "",
    genderAss: "",
    newbieAss: false,
    contactInfo: "",
    description: ""
  });
  const { changePage, langStrings } = props;
  const handleChange = (e, item) => {
    updateValues({ ...values, [item]: e.target.value });
  };

  const handleGenderAss = (event, newGender) => {
    updateValues({
      ...values,
      genderAss: newGender
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
    result === "Success" ? changePage("Squads") : changePage("HelpMe");
    setOpenResult(false);
  }
  const handleBack = () => {
    changePage("Squads");
  };

  const handleSubmit = () => {
    handleClickOpenResult();
    const approved = () => {
      let newHelp = {
        Description: values.description,
        ContactInfo: values.contactInfo,
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

    values.nameAss !== "" &&
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
              {langStrings.SinglePersonLooking}
            </Typography>
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
