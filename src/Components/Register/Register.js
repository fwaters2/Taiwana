import React from "react";
import Player from "./Player";
import {
  Button,
  TextField,
  Paper,
  List,
  ListItem,
  Typography,
  Container,
  FormHelperText,
  ButtonGroup
} from "@material-ui/core";
import ShortsDialog from "./ShortsDialog";
import ReqDialog from "./ReqDialog";
import Firestore from "./../../Utils/Firestore";
import ResultDialog from "./ResultDialog";

export default function Register(props) {
  const [open, setOpen] = React.useState(false);
  const [openReq, setOpenReq] = React.useState(true);
  const [openResult, setOpenResult] = React.useState(false);
  const [result, changeResult] = React.useState(
    "Sorry, Please enter ALL information"
  );
  const [values, updateValues] = React.useState({
    squadName: "",
    nameCap: "",
    nameAss: "",
    nameNew: "",
    genderCap: "",
    genderAss: "",
    genderNew: "",
    sizeCap: "",
    sizeAss: "",
    sizeNew: ""
  });
  const { changePage } = props;
  const handleChange = (e, item) => {
    updateValues({ ...values, [item]: e.target.value });
  };
  function handleMessage(error) {
    error === "Success"
      ? changeResult("Success! Please transfer ASAP :D")
      : error === "SameGender"
      ? changeResult(
          "I'm sorry, each squad should have at least one guy and one lady!"
        )
      : changeResult("Please fill out all the information");
  }
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
  const handleGenderNew = (event, newGender) => {
    updateValues({
      ...values,
      genderNew: newGender
    });
  };
  const handleSizeCap = e => {
    updateValues({
      ...values,
      sizeCap: e.target.value
    });
  };
  const handleSizeAss = e => {
    updateValues({
      ...values,
      sizeAss: e.target.value
    });
  };
  const handleSizeNew = e => {
    updateValues({
      ...values,
      sizeNew: e.target.value
    });
  };

  function handleClickOpen() {
    setOpen(true);
  }
  function handleClickOpenReq() {
    setOpenReq(true);
  }
  function handleClickOpenResult() {
    setOpenResult(true);
  }

  const handleClose = value => {
    setOpen(false);
  };
  const handleCloseReq = value => {
    setOpenReq(false);
  };

  function handleCloseResult() {
    result === "Success" ? changePage("Registered") : changePage("Register");
    setOpenResult(false);
  }
  function handleBack() {
    changePage("Home");
  }

  const handleSubmit = () => {
    handleClickOpenResult();
    const approved = () => {
      let newSquad = {
        Date: new Date(),
        SquadName: values.squadName,
        Paid: false,
        cap: {
          name: values.nameCap,
          gender: values.genderCap,
          size: values.sizeCap
        },
        ass: {
          name: values.nameAss,
          gender: values.genderAss,
          size: values.sizeAss
        },
        new: {
          name: values.nameNew,
          gender: values.genderNew,
          size: values.sizeNew
        }
      };
      Firestore.firestore()
        .collection("TaiwanaReg")
        .add(newSquad);
      //handleMessage("Success");
      changePage("Success");
    };
    values.squadName !== "" &&
    values.nameCap !== "" &&
    values.nameAss !== "" &&
    values.nameNew !== "" &&
    values.genderCap !== "" &&
    values.genderAss !== "" &&
    values.genderNew !== "" &&
    values.sizeCap !== "" &&
    values.sizeAss !== "" &&
    values.sizeNew !== ""
      ? values.genderCap === values.genderAss &&
        values.genderCap === values.genderNew
        ? handleMessage("SameGender")
        : approved()
      : handleMessage("Error");
  };
  return (
    <div style={{ width: "100vw" }}>
      <Container maxWidth="md">
        <Paper>
          <List>
            <Typography variant="h5" align="center" gutterBottom>
              Squad Registration
            </Typography>
            <ButtonGroup variant="contained" fullWidth size="small">
              <Button color="primary" onClick={handleClickOpenReq}>
                Squad Req.
              </Button>
              <Button color="secondary" onClick={handleClickOpen}>
                Size Info
              </Button>
            </ButtonGroup>
            <ShortsDialog open={open} onClose={handleClose} />
            <ReqDialog
              changePage={changePage}
              open={openReq}
              onClose={handleCloseReq}
            />
            <TextField
              autoFocus
              inputProps={{
                style: {
                  fontSize: 25,
                  fontWeight: "bold"
                }
              }}
              label="Squad Name"
              fullWidth
              variant="filled"
              value={values.squadName}
              onChange={e => handleChange(e, "squadName")}
            />
            <FormHelperText>Captain</FormHelperText>
            <ListItem divider key="Cap">
              <Player
                handleClickOpen={handleClickOpen}
                values={values}
                handleChange={handleChange}
                handleGender={handleGenderCap}
                handleSize={handleSizeCap}
                player="Cap"
              />
            </ListItem>
            <FormHelperText>Assistant Captain</FormHelperText>
            <ListItem divider key="Ass">
              <Player
                handleClickOpen={handleClickOpen}
                values={values}
                handleChange={handleChange}
                handleGender={handleGenderAss}
                handleSize={handleSizeAss}
                player="Ass"
              />
            </ListItem>
            <FormHelperText>New Player</FormHelperText>
            <ListItem key="New">
              <Player
                handleClickOpen={handleClickOpen}
                values={values}
                handleChange={handleChange}
                handleGender={handleGenderNew}
                handleSize={handleSizeNew}
                player="New"
              />
            </ListItem>
          </List>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleSubmit}
          >
            Submit Squad
          </Button>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={handleBack}
          >
            Back
          </Button>
          <ResultDialog
            open={openResult}
            onClose={handleCloseResult}
            result={result}
          />
        </Paper>
      </Container>
    </div>
  );
}
