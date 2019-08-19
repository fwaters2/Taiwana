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
      return <Location  langStrings={langStrings} />;
    case "Transportation":
      return <Transportation  langStrings={langStrings} />;
    case "HowToPlay":
      return <HowToPlay langStrings={langStrings} />;
    case "FAQ":
      return <FAQ langStrings={langStrings} />;
    case "Map":
      return <GoogleMap  langStrings={langStrings} />;
    case "WhatToBring":
      return <WhatToBring  langStrings={langStrings} />;
    case "CurrentlyRegistered":
      return <Registered  langStrings={langStrings} changePage={changePage}/>
    case "AboutUs":
      return <AboutUs  langStrings={langStrings} />;
    case "Register":
      return <Register  langStrings={langStrings} changePage={changePage}/>;
    case "HelpMe":
      return <HelpMe  langStrings={langStrings} changePage={changePage}/>
    case "HelpUs":
      return <HelpUs  langStrings={langStrings} changePage={changePage}/>
    case "Cost":
      return <Cost  langStrings={langStrings} changePage={changePage} />
    case "HelpTabs":
      return <HelpTabs  langStrings={langStrings} changePage={changePage} />
    case "Success":
      return <Success  langStrings={langStrings} changePage={changePage} />
    default:
      return <div>Broken, tell Forrest to step his game up</div>;
  }
}
