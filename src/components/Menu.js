import React from "react";
import chocolate from "../image/chocolate.jpg";
import cookies from "../image/cookies.webp";
import "./Menu.css";


const Menu = () => {
  return (
    <div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={chocolate} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Kit 1</h5>
              <p className="card-text">
                2 Chocolate cookies with milk chocolate flavor
              </p>
              <p>4 Vanilla Cookies with Milk Chocolate Flavors</p>
              <p>6 Red Velvet Cookies with White Chocolate Chips</p>
              <h5>$39,00</h5>
              <button type="button" className="button">Add to card</button>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3">
        <div className="row g-0">
          <div className="col-md-4">
            <img src={cookies} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Kit 2</h5>
              <p className="card-text">3 Milk Chocolate Chip Cookies</p>
              <p>3 Vanilla Cookies with Milk Chocolate Chips</p>
              <p>3 Red Velvet Cookies with White Chocolate Chips</p>
              <h5>$25,00</h5>
              <button type="button" className="button">Add to ard</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
