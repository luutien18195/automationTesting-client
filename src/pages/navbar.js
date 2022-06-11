import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";

export default function RootNavbar() {
  return (
    <>
      <Navbar
        expand='lg'
        variant='dark'
        style={{backgroundColor: "rgb(82 98 139)"}}>
        <Container>
          <Navbar.Brand href='#'>Navbar</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}
