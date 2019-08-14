import React from "react";
import { Container, Typography, Divider } from "@material-ui/core";

export default function HowToPlay(props) {
  const { langStrings } = props;
  return (
    <Container>
      <iframe
        title="How To Play"
        width="100%"
        height="315"
        src="https://www.youtube.com/embed/RycyHAbbYMU"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <Divider />
      <Typography paragraph align="center">
        Basic rules: No running with the disc, and score in the touchdown area
        by passing to your teammates!
      </Typography>
      <Typography paragraph align="center">
      Some new beach rules for the amateurs/proficients:
      <Divider />
-4:1 or 3:2 gender ratio (defense decides but have some fun with it!)
<Divider />
-Every color should be represented by both teams (this will make more sense tomorrow)
<Divider />
-upside down pulls
<Divider />
-endzone to enzone is 2 points
<Divider />
-a dropped pull is fine if you were attempting a really cool catch or sick layout
      </Typography>
      <Typography paragraph variant="caption" align="center">
        {langStrings.ExtraRules}{" "}
        <a href="http://beachultimate.org/wp-content/uploads/2019/02/WFDF-Rules-of-Beach-Ultimate-2019-Final-1Feb.pdf">
          {langStrings.Here}
        </a>
      </Typography>
    </Container>
  );
}
