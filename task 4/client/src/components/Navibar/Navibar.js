import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navibar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" className="px-3">
        <Navbar.Brand>Brand</Navbar.Brand>
        <Nav>
          <Nav.Link>Home</Nav.Link>
          <Nav.Link>Users</Nav.Link>
          <Nav.Link>About</Nav.Link>
        </Nav>
        <Nav className="ms-auto">
          <Link to="/login">
            <Button variant="secondary" className="me-2">
              Log In
            </Button>
          </Link>
          <Link to="/register">
            <Button variant="secondary">Registration</Button>
          </Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navibar;
