import React from "react";
import { Typography, Container } from "@material-ui/core";

export default function WhatToBring() {
  const listItems = [
    "SUNSCREEN (UV rays still go straight through clouds)",
    "Waterbottle: We will be supplied bottle of water there, but please bring your own as well to help us reduce waste!",
    "Change of clothes/towel: Beach frisbee is a sandy business and might be a bit wet as well!",
    "Socks (depending on weather): if it turns out to be hot and sunny, you might want to bring some foot protection for that black, heat-absorbent sand",
    "Any special food or drink you'd like. However, there is a bar and night market right next to the fields"
  ];
  return (
    <div style={{width:"100vw"}}>
    <Container maxWidth="sm">
    {listItems.map(item=>(
<Typography paragraph>{item}</Typography>
    )
    )}
    </Container>
    </div>
  );
}
