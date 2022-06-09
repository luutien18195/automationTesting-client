import React, {useState, useEffect} from "react";
import Image from 'react-bootstrap/Image'
import {GoDashboard} from 'react-icons/go';
import {SiCoffeescript} from 'react-icons/si'
import {MdOutlineSettings} from 'react-icons/md'
import {FaList} from 'react-icons/fa'

import {
    ProSidebar,
    Menu,
    MenuItem,
    SubMenu,
    SidebarHeader,
    SidebarFooter,
    SidebarContent
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

export default function Sidebar(props) {
    const [hide, setHide] = useState(props.hide);
    const toggleShow = () => {setHide(!hide)}

    return (
      <>
        <ProSidebar collapsed={hide}
            className={props.class}
            width="220px">
            <SidebarHeader className={hide ? "p-3 d-flex": "p-3"}>
                {/* <Image roundedCircle responsive 
                src="static\images\avatars\default-avatar-shiba-inu.jpg"
                sizes="40px"/> */}
                <div className="float-start" hidden={hide}>
                    AutoTest
                </div>
                <span className={
                    hide ? "text-center cursor-pointer d-inline-block float-end w-100 fs-5"
                      : "text-center cursor-pointer d-inline-block float-end"
                    }
                    onClick={toggleShow}>
                    <FaList/>
                </span>
            </SidebarHeader>
            <SidebarContent>
            <Menu iconShape="circle">
                <MenuItem icon={<GoDashboard />} >Dashboard</MenuItem>
                <MenuItem icon={<SiCoffeescript />} >Scenarios</MenuItem>
                <MenuItem icon={<MdOutlineSettings />} >Settings</MenuItem>
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
