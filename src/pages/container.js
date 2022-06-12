import React from "react";
import {Outlet} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

export default function RootContainer() {
  return (
    <>
      <div className='root-container mt-3 ml-3 mr-3 p-3 shadow-lg'>
        <Outlet />
      </div>
    </>
  );
}
