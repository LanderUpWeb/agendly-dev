// @ts-nocheck
import React from 'react';
import NavbarItens from './NavbarItens'; 
import './Navbar.css';

import logoImg from '../../assets/logo-agendly.svg'; 

const Navbar = () => {
  return (
    <nav className="navbar-principal-agenda">
      <div className="navbar-bloco-logo">
        <img 
          src={logoImg}  
          alt="Logo" 
          className="navbar-logo-img"
        />
      </div>

      <NavbarItens /> 
    </nav>
  );
};

export default Navbar;