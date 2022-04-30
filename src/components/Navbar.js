import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar">
        <div className="nav-links d-flex justify-content-between align-items-center">
          <NavLink to="/home" className="link home">
            <div className="nav-home subtitle">Home</div>
          </NavLink>
          <NavLink to="/cadastro" className="link cadastro">
            <div className="nav-cadastro subtitle">Cadastro</div>
          </NavLink>
          <p> | </p>
          <NavLink to="/" className="link menu">
            <div className="nav-menu">Menu</div>
          </NavLink>
        </div>
    </nav>
  );
};

export default NavBar;
