import React from "react";
import Drawer from "./Components/Drawer";
import "./Utils/lang.json";
const lang = require("./Utils/lang.json");

export default function StateStore() {
  const [currentPage, updatePage] = React.useState("Squads");
  const [currentLang, changeLang] = React.useState("en");
  const langStrings = lang[currentLang];
  function changePage(page) {
    updatePage(page)  
  }
  function toggleLang() {
    currentLang === "en" ? changeLang("ch") : changeLang("en");  
  }
  return (
    <Drawer
      currentPage={currentPage}
      changePage={changePage}
      currentLang={currentLang}
      langStrings={langStrings}
      toggleLang={toggleLang}
    />
  );
}
