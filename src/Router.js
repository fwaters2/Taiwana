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

export default function Router(props) {
  const { currentPage, langStrings, changePage } = props;
  switch (currentPage) {
    case "Home":
      return <Home langStrings={langStrings} changePage={changePage} />;
    case "Squads":
      return <Squads langStrings={langStrings} />;
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

    default:
      return <div>Broken</div>;
  }
}
