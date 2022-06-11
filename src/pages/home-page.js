import React, {useState, useEffect} from "react";
import "react-pro-sidebar/dist/css/styles.css";
import Sidebar from "./sidebar";
import RootContainer from "./container";
import RootNavbar from "./navbar";

export default function HomePage() {
  return (
    <>
      <Sidebar hide={false} class='float-start w-17 absolute-min-width-270' />
      <div className='d-flex flex-column w-100'>
        <RootNavbar />
        <RootContainer />
      </div>
    </>
  );
}
