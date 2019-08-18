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
import Registered from "./Components/Squads/Registered";
import Cost from "./Components/Cost";
import HelpTabs from "./Components/Squads/HelpTabs";
import Success from "./Components/Register/Success";

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
    case "CurrentlyRegistered":
      return <Registered changePage={changePage}/>
    case "AboutUs":
      return <AboutUs />;
    case "Register":
      return <Register changePage={changePage}/>;
    case "HelpMe":
      return <HelpMe changePage={changePage}/>
    case "HelpUs":
      return <HelpUs changePage={changePage}/>
    case "Cost":
      return <Cost changePage={changePage} />
    case "HelpTabs":
      return <HelpTabs changePage={changePage} />
    case "Success":
      return <Success changePage={changePage} />
    default:
      return <div>Broken, tell Forrest to step his game up</div>;
  }
}
