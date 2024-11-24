import React from 'react';
import { Outlet, Link } from 'react-router-dom';


const Contact = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center">Página de Contacto</h2>
      <p className="text-center">Selecciona un usuario para ver su información.</p>
      <div className="d-flex justify-content-center mb-4">
        <Link to="/contact/Antonio" className="btn btn-primary me-2">Antonio</Link>
        <Link to="/contact/Domingo" className="btn btn-success me-2">Domingo</Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Contact;
