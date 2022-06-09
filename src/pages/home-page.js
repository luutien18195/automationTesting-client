import React, { useState, useEffect } from "react";
import 'react-pro-sidebar/dist/css/styles.css';

import {
  Button, Offcanvas
} from "react-bootstrap";
import Sidebar from "./sidebar";
import Container from "./container";


export default function HomePage() {

  return (
    <>
      <Sidebar hide={false} class="float-start"></Sidebar>
      <Container></Container>
    </>
  );
}
