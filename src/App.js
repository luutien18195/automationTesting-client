import React from "react";
import HomePage from "./pages/home-page";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Scenarios from "./components/scenario/scenarios";
import Settings from "./components/settings/settings";
import ErrorPage from "./pages/404";
import Login from "./components/login/login";
import Register from "./components/register/register";

function App() {
  return (
    <>
      <Routes>
        <Route exact path='/' element={<HomePage />} >
          <Route exact path='/' element={<Scenarios />} />
          <Route exact path='/dashboard' element={<Dashboard />} />
          <Route exact path='/scenarios' element={<Scenarios />} />
          <Route exact path='/settings' element={<Settings />} />
          <Route exact path='/error' element={<ErrorPage />} />
        </Route>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route path='/*' element={<ErrorPage />} />
        
        <Route exact path='/error' element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
