import React, {useState, useEffect} from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "./sidebar";
import RootContainer from "./container";
import RootNavbar from "./navbar";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function HomePage() {
  const { user: currentUser } = useSelector((state) => state.auth);
  if (!currentUser) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Sidebar hide={true} class='float-start w-17 absolute-min-width-225' />
      <div className='d-flex flex-column w-100'>
        <RootNavbar />
        <RootContainer />
      </div>
    </>
  );
}
