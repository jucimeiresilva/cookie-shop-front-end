import React from "react";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="container d-flex align-items-center">
                <NavLink to="/" className="link">
                    <img className="logo" src={logo} alt="site logo" />
                </NavLink>
            </div>
            <div className="nav-links d-flex justify-content-between align-items-center">
                <NavLink to="/home" className="link home">
                    <div className="nav-home subtitle">Home</div>
                </NavLink>
                <NavLink to="/login" className="link login">
                    <div className="nav-login" subtitle>Login</div>
                </NavLink>
                <p> | </p>
                <NavLink to="/menu" className="link subtitle">
                    <div className="nav-menu">Menu</div>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavBar;