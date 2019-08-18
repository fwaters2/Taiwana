import React from "react";
import { Typography, Button, Container } from "@material-ui/core";

export default function Success(props) {
  const { changePage } = props;
  return (
    <div style={{ width: "100vw" }}>
      <Container style={{ padding: "0" }} maxWidth="sm">
        <Typography variant="h4" align="center" gutterBottom>
          Success!
        </Typography>
        <Typography variant="body1" paragraph>
          You're Squad has been successfully registered for the tournament!
        </Typography>
        <Typography variant="body1" paragraph>
          To guarantee your spot, please transfer the amount ($1,000) as soon as
          possible.
        </Typography>
        <Button onClick={() => changePage("Cost")} color="primary">
          How to Transfer
        </Button>
        <Button onClick={() => changePage("Registered")} color="primary">
          See the list of Squads
        </Button>
      </Container>
    </div>
  );
}
