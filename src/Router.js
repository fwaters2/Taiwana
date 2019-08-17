import React from "react";
import Home from "./Components/Home";
import Squads from "./Components/Squads/Squads";
import GoogleMap from "./Components/GoogleMap";
import FAQ from "./Components/FAQ";
import Location from "./Components/Location";
import Transportation from "./Components/Transportation";
import HowToPlay from "./Components/HowToPlay";
import Schedule from "./Components/Schedule";
import WhatToBring from "./Components/Extra/WhatToBring";
import AboutUs from "./Components/Extra/AboutUs";
import Register from "./Components/Register/Register";
import HelpMe from './Components/Squads/HelpMe'
import HelpUs from "./Components/Squads/HelpUs";

export default function Router(props) {
  const { currentPage, langStrings, changePage } = props;
  switch (currentPage) {
    case "Home":
      return <Home langStrings={langStrings} changePage={changePage} />;
    case "Squads":
      return <Squads langStrings={langStrings} changePage={changePage}/>;
    case "Schedule":
      return <Schedule langStrings={langStrings} />;
    case "Location":
      return <Location />;
    case "Transportation":
      return <Transportation />;
    case "HowToPlay":
      return <HowToPlay langStrings={langStrings} />;
    case "FAQ":
      return <FAQ langStrings={langStrings} />;
    case "Map":
      return <GoogleMap />;
    case "WhatToBring":
      return <WhatToBring />;
    case "AboutUs":
      return <AboutUs />;
    case "Register":
      return <Register changePage={changePage}/>;
    case "HelpMe":
      return <HelpMe changePage={changePage}/>
    case "HelpUs":
      return <HelpUs changePage={changePage}/>
    default:
      return <div>Broken</div>;
  }
}
