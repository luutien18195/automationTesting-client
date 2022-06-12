import React from "react";
import Image from "react-bootstrap/Image";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function RootNavbar() {
  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  }
  return (
    <>
      <Navbar
        expand='lg'
        variant='ligth'
        style={{backgroundColor: "rgb(82 98 139)"}}>
        <Container>
          <Navbar.Brand href='#'>Navbar</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end'>
            <Navbar.Text className='p-0'>
              <NavDropdown
                title={
                  <div className='d-inline-block'>
                    <span className='d-inline-block mr-2'>Tiến Lưu</span>
                    <Image
                      roundedCircle
                      src='static\images\avatars\default-avatar-shiba-inu.jpg'
                      width='45px'
                    />
                  </div>
                }>
                <NavDropdown.Item href='#' onClick={handleLogout}>Logout</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href='#'>Profile</NavDropdown.Item>
                <NavDropdown.Item href='#'>Action 1</NavDropdown.Item>
                <NavDropdown.Item href='#'>Action 2</NavDropdown.Item>
              </NavDropdown>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
