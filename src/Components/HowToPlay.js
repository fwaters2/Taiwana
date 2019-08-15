import React from "react";
import {
  Container,
  Typography,
  Divider,
  ListItem,
  ListItemText,
  List
} from "@material-ui/core";

export default function HowToPlay(props) {
  const { langStrings } = props;
  return (
    <div style={{width:"100vw"}}>
      <iframe
        title="How To Play"
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/RycyHAbbYMU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Container maxWidth="md">
      <Divider />

      <Typography paragraph align="center">
        Basic rules: No running with the disc, and score in the touchdown area
        by passing to your teammates!
      </Typography>
      <Typography variant="h6" align="center">
        Some new beach rules for the amateurs/proficients:
      </Typography>
      <List>
        <ListItem>
          <ListItemText>
            - 4:1 or 3:2 gender ratio (defense decides but have some fun with
            it!)
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>- Upside down pulls</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>- Endzone to endzone is 2 points</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            - A dropped pull is fine if you were attempting a really cool catch
            or sick layout
          </ListItemText>
        </ListItem>
      </List>
      <Typography paragraph variant="caption" align="center">
        {langStrings.ExtraRules}{" "}
        <a href="http://beachultimate.org/wp-content/uploads/2019/02/WFDF-Rules-of-Beach-Ultimate-2019-Final-1Feb.pdf">
          {langStrings.Here}
        </a>
      </Typography>
    </Container>
    </div>
  );
}
