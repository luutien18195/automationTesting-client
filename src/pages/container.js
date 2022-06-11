import React from "react";
import {Routes, Route} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import Dashboard from "../components/dashboard/dashboard";
import Scenarios from "../components/scenario/scenarios";
import Settings from "../components/settings/settings";
import ErrorPage from "../pages/404";

export default function MContainer() {
  return (
    <>
      <div className='absolute-min-width-500 d-inline-block mt-3 ml-3 overflow-auto'>
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/scenarios' element={<Scenarios />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/error' element={<ErrorPage />} />
          <Route path='/*' element={<ErrorPage />} />
        </Routes>
      </div>
    </>
  );
}
