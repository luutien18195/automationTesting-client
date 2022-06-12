import React, {useState, useEffect} from "react";
import ScenarioList from "./scenario-list";
import ScenarioToolBar from "./scenario-toolbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function Scenarios() {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <ScenarioToolBar></ScenarioToolBar>
      <ScenarioList></ScenarioList>
    </>
  );
}
