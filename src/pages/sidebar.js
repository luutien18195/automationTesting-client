import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import Image from "react-bootstrap/Image";
import {GoDashboard} from "react-icons/go";
import {SiCoffeescript} from "react-icons/si";
import {MdOutlineSettings} from "react-icons/md";
import {FaList} from "react-icons/fa";

import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarHeader,
  SidebarFooter,
  SidebarContent,
} from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

export default function Sidebar(props) {
  const [hide, setHide] = useState(props.hide);
  const toggleShow = () => {
    setHide(!hide);
  };

  return (
    <>
      <ProSidebar collapsed={hide} className={props.class}>
        <SidebarHeader className={hide ? "p-3 d-flex" : "p-3"}>
          <div
            className={
              hide
                ? "float-start pt-1"
                : "float-start pt-2 d-flex align-items-center"
            }
            hidden={hide}>
            <Image roundedCircle src='favicon.ico' width='30px' />
            <span className='fs-5 ml-1'>Dr.Autotest</span>
          </div>
          <span
            className={
              hide
                ? "text-center cursor-pointer d-inline-block float-end w-100 fs-5"
                : "text-center cursor-pointer d-inline-block float-end fs-3"
            }
            onClick={toggleShow}>
            <FaList />
          </span>
        </SidebarHeader>
        <SidebarContent>
          <Menu iconShape='circle'>
            <MenuItem icon={<GoDashboard />}>
              <Link to='/dashboard'>Dashboard</Link>
            </MenuItem>
            <MenuItem icon={<SiCoffeescript />}>
              <Link to='/scenarios'>Scenarios</Link>
            </MenuItem>
            <MenuItem icon={<MdOutlineSettings />}>
              <Link to='/settings'>Settings</Link>
            </MenuItem>
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          {/**
           *  You can add a footer for the sidebar ex: copyright
           */}
        </SidebarFooter>
      </ProSidebar>
    </>
  );
}
