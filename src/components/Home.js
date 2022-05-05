import React from "react";
import "./Home.css";
import logo from "../image/logo.jpeg";

const Home = () => {
  return (
    <div className="home-text">
      <div className="logo">
        <div className="title">
          <div className="title-cookies">Cookies</div>
          <div className="title-shop">Shop</div>
        </div>
        <img className="image" src={logo} />
      </div>
      <div className="create-div">
        <div className="text">Do you want to fall in love with our delights?</div>
        <div className="text-register">Click the button below and register.</div>
        <button type="button" className="button">Create</button>
      </div>
    </div>
  );
};



export default Home;
