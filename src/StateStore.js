import React from "react";
import Drawer from "./Components/Drawer";

export default function StateStore() {
  const currentPage = "Home"
  return <Drawer currentPage = {currentPage}/>;
}
