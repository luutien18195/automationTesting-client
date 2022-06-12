import React from "react";
import HomePage from "./pages/home-page";
import {Routes, Route, Outlet} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Scenarios from "./components/scenario/scenarios";
import Settings from "./components/settings/settings";
import ErrorPage from "./pages/404";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />}>
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/scenarios' element={<Scenarios />} />
          <Route path='/settings' element={<Settings />} />
          <Route path='/error' element={<ErrorPage />} />
        </Route>
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/error' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
