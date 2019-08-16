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

export default function Register() {
  const [open, setOpen] = React.useState(false);
  const [openReq, setOpenReq] = React.useState(false);
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
const handleSizeCap = (e) =>{
  updateValues({
    ...values,
    sizeCap: e.target.value
  });
}
const handleSizeAss = (e) =>{
  updateValues({
    ...values,
    sizeAss: e.target.value
  });
}
const handleSizeNew = (e) =>{
  updateValues({
    ...values,
    sizeNew: e.target.value
  });
}


  function handleClickOpen() {
    setOpen(true);
  }
  function handleClickOpenReq() {
    setOpenReq(true);
  }

  const handleClose = value => {
    setOpen(false);
  };
  const handleCloseReq = value => {
    setOpenReq(false);
  };

  const handleSubmit = () =>{
    alert("Welcome team "+ values.squadName)
  }
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
          <Button variant="contained" color="primary" fullWidth onClick={handleSubmit}>
            Submit Squad
          </Button>
        </Paper>
      </Container>
    </div>
  );
}
