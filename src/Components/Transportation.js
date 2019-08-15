import React from "react";
import { Typography, Container } from "@material-ui/core";

export default function Transportation() {
  return (
    <div style={{width:"100vw"}}>
    <Container maxWidth="sm">
      <Typography paragraph>
        -walking ~40mins from Kaohsiung Main Station: Take MRT to the Sizihwan
        stop and walk to the Gushan Ferry. On arrival through the night market
        till you get to the beach
      </Typography>
      <Typography paragraph>
        -scootering: Go to the Gushan Ferry and follow the same directions as
        the walkers
      </Typography>
    </Container>
    </div>
  );
}
