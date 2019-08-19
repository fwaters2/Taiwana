import React from "react";
import { Typography, Button, Container } from "@material-ui/core";

export default function Success(props) {
  const { changePage, langStrings } = props;
  return (
    <div style={{ width: "100vw" }}>
      <Container style={{ padding: "0" }} maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
         {langStrings.Success}
        </Typography>
        <Typography variant="body1" paragraph>
          {langStrings.successSquad}
        </Typography>
        <Typography variant="body1" paragraph>
          {langStrings.TransferPlease}
        </Typography>
        <Button onClick={() => changePage("Cost")} color="primary">
          {langStrings.HowToTransfer}
        </Button>
        <Button onClick={() => changePage("Registered")} color="primary">
          {langStrings.SeeList}
        </Button>
      </Container>
    </div>
  );
}
