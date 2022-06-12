import React from "react";
import {Outlet} from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";

export default function RootContainer() {
  return (
    <>
      <div className='absolute-min-width-500 d-inline-block mt-3 ml-3 overflow-auto'>
        <Outlet />
      </div>
    </>
  );
}
