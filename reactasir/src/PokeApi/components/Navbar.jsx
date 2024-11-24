import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link as={Link} to="/" className="mx-3">Inicio</Nav.Link>
          <Nav.Link as={Link} to="/gen1" className="mx-3">Gen 1</Nav.Link>
          <Nav.Link as={Link} to="/gen2" className="mx-3">Gen 2</Nav.Link>
          <Nav.Link as={Link} to="/gen3" className="mx-3">Gen 3</Nav.Link>
          <Nav.Link as={Link} to="/contact" className="mx-3">Contacto</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
