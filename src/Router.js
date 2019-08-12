import React from "react";
import Home from "./Components/Home";
import Squads from "./Components/Squads/Squads";
import GoogleMap from "./Components/GoogleMap";
import About from "./Components/About";

export default function Router(props) {
  const { currentPage } = props;
  switch ("Home") {
    case "Home":
      return <Home />;
      case "Squads":
      return <Squads />;
    case "GoogleMap":
      return <GoogleMap />;
    case "About":
      return <About />;
    default:
      return <div>Broken</div>;
  }
}
