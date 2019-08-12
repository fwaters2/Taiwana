import React from "react";
import Router from "../Router";
import Header from "./Header";
import Drawer from "./Drawer";

export default function App(props) {
  const { currentPage } = props;

  return (
    <React.Fragment>
      <Header />
      <Drawer />
      <Router currentPage={currentPage} />
    </React.Fragment>
  );
}
