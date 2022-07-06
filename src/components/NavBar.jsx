import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(
    sessionStorage.getItem("email") || false
  );

  const handleClick = () => {
    setIsOpen(false);
    sessionStorage.clear();
  };
  return (
    <Navbar bg="success" variant="dark">
      {isOpen ? (
        <Container>
          <Navbar.Brand href="/home">Clarusway</Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink onClick={handleClick} to="/login">
              Logout
            </NavLink>
          </Nav>
        </Container>
      ) : (
        <Container>
          <Navbar.Brand href="">Clarusway</Navbar.Brand>
        </Container>
      )}
    </Navbar>
  );
};

export default NavBar;
