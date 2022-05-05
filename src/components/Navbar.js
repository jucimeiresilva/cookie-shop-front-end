import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="container d-flex align-items-center">
        
        <div className="nav-links d-flex justify-content-between align-items-center">
          <NavLink to="/" className="link home">
            <div className="nav-home subtitle">Home</div>
          </NavLink>
          <NavLink to="/menu" className="link menu">
            <div className="nav-menu">Menu</div>
          </NavLink>
          <NavLink to="/register" className="link register">
            <div className="nav-register subtitle">Register</div>
          </NavLink>
          <NavLink to="/login" className="link login">
            <div className="nav-login subtitle">Login</div>
          </NavLink>
        </div>
       </div> 
    </nav>
  );
};

export default NavBar;
