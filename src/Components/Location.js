import React from "react";
import { Container } from "@material-ui/core";
import GoogleMap from './GoogleMap'

export default function Location() {
  return (
    <div style={{width:"100vw"}}>
    <Container style={{padding:"0"}} maxWidth="sm">
      <GoogleMap />
      <div style={{width:"340px",height:"1500px"}}>
     <iframe
     title="Sunset Beach Bar"
       src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcijinsunset%2F&tabs=timeline&width=340&height=10000&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=239675496669332"
       width="100%"
       height="100%"
    //   style="border:none;overflow:hidden"
      //style={{"border":"none"}}
       scrolling="no"
       frameorder="0"
       allowTransparency="true"
       allow="encrypted-media"
     />
     </div>
     </Container>
     </div>
  );
}
