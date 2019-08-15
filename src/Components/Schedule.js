import React from "react";
import {
  Typography,
  Container,
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow
} from "@material-ui/core";

export default function Schedule(props) {
  const { langStrings } = props;
  return (
    <div style={{width:"100vw"}}> 
    <Container maxWidth='sm'>
      <Typography variant="h6" align="center">
        {langStrings.SubjectToChange}
      </Typography>
      <Typography paragraph align="center">
        Last year we started at about 2:30pm and played 3-4 games of ~30mins
        each. Could change depending on numbers.
      </Typography>
      <Typography variant="h6" align="center">
        Example Schedule:
        </Typography>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Game</TableCell>
              <TableCell>Team 1</TableCell>
              <TableCell>Team 2</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>1</TableCell>
              <TableCell>Squads "A","B","C"</TableCell>
              <TableCell>Squads "D","E","F"</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>2</TableCell>
              <TableCell>Squads "D","B","E"</TableCell>
              <TableCell>Squads "A","C","F"</TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Typography paragraph align="center">
        You and your 2 friends are "Squad B". Your first game you team up with
        Squads "A" and "C" to play a game. Then in your second game you will
        team up with Squads "D" and "E"
      </Typography>
    </Container>
    </div>
  );
}
