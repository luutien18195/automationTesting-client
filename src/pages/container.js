import React, { useState, useEffect } from "react";
import 'react-pro-sidebar/dist/css/styles.css';

import Dashboard from "../components/dashboard/dashboard";
import Scenario from "../components/scenario/scenario";


export default function Container() {

  return (
    <>
      <div className="w-80 d-inline-block ml-3">
        <Scenario></Scenario>
      </div>
    </>
  );
}