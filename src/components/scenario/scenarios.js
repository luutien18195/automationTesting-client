import React, {useState, useEffect} from "react";
import ScenarioList from "./scenario-list";
import ScenarioToolBar from "./scenario-toolbar";

export default function Scenarios() {
  return (
    <>
      <ScenarioToolBar></ScenarioToolBar>
      <ScenarioList></ScenarioList>
    </>
  );
}
