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
  ButtonGroup,
} from "@material-ui/core";
import ShortsDialog from "./ShortsDialog";
import ReqDialog from "./ReqDialog";
import Firestore from "./../../Utils/Firestore";
import ResultDialog from "./ResultDialog";

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    margin: 200
  },
  //style for font size
  resize: {
    fontSize: 100
  }
};

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
    result === "Success" ? changePage("Squads") : changePage("Register");
    setOpenResult(false);
  }

  const handleSubmit = () => {
    handleClickOpenResult();
    const approved = () => {
      let newSquad = {
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
      Firestore.firestore().collection("TaiwanaReg").add(
        newSquad
      )
      changeResult("Success");
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
      ? approved()
      : changeResult("Error");
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
            <ReqDialog open={openReq} onClose={handleCloseReq} />
            <TextField
            autoFocus
              inputProps={{
                style: {
                  fontSize: 25,
                  fontWeight: 'bold'
                }
              }}
              className={styles.textField}
              label="Squad Name"
              fullWidth
              variant="filled"
              value={values.squadName}
              onChange={e => handleChange(e, "squadName")}
            />
            <FormHelperText>Captain</FormHelperText>
            <ListItem divider key="Cap">
              <Player
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
