import React from 'react'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navegacion() {
  return (
    <>
      <Navbar bg="antiquewhite" data-bs-theme="antiquewhite">
        <Container>
          <Nav>
            <Nav.Link href="#Inicio">Inicio</Nav.Link>
            <Nav.Link href="#Contacto">Contacto</Nav.Link>
            <Nav.Link href="#Servicios">Servicios</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Navegacion;