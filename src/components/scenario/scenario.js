import React, { useState, useEffect } from "react";
import {
  Button, Offcanvas
} from "react-bootstrap";
// import NotFound from "./404";
import Dashboard from "../dashboard/dashboard";
import ScenarioList from "./scenario-list";

export default function Scenario() {

  return (
    <>
      <ScenarioList></ScenarioList>
    </>
  );
}
