import React from "react";
import { Typography, Container, ListItem, List, ListItemText } from "@material-ui/core";

export default function FAQ(props) {
  const {langStrings} = props
  return (
    <div style={{width:"100vw"}}>
    <Container maxWidth="sm">
    <List>
      {langStrings.Questions.map(question=>(
        <ListItem divider key={question.Q}>
        <ListItemText primary={question.Q} secondary={question.A} />
        </ListItem>
      ))}
    </List>
    <Typography paragraph align="center">
      {langStrings.NewQuestion}<a href="https://www.facebook.com/events/2573581996020331/">{langStrings.Here}</a>
    </Typography>
    </Container>
    </div>
  );
}
