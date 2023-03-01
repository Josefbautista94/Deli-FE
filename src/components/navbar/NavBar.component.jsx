import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import React, { useState } from "react";
import "./NavBar.styles.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <Fragment>
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          background: "#fff",
        }}
      >
        <div className="navbar">
          <Link className="logo" to="/">
            Ft Tryon Deli & Juice Bar
          </Link>
          <button className="menu-button" onClick={handleMenuClick}>
            <i className="fa fa-bars">MENU</i>
          </button>
        </div>
        {isMenuOpen && (
          <ul className="menu right">
            <li>
              <a href="#fresh-salads" onClick={handleMenuClick}>
                Fresh Salads
              </a>
            </li>
            <li>
              <a href="#grilled-cheese" onClick={handleMenuClick}>
                Grilled Cheese
              </a>
            </li>
            <li>
              <a href="#halal-food" onClick={handleMenuClick}>
                Halal Food
              </a>
            </li>
            <li>
              <a href="#signature-sandwiches" onClick={handleMenuClick}>
                Signature Sandwiches
              </a>
            </li>
            <li>
              <a href="#steaks-n-cheese" onClick={handleMenuClick}>
                Steaks n' Cheese
              </a>
            </li>
            <li>
              <a href="#breakfast" onClick={handleMenuClick}>
                Breakfast
              </a>
            </li>
            <li>
              <a href="#angus-burgers" onClick={handleMenuClick}>
                Angus Burgers
              </a>
            </li>
            <li>
              <a href="#fruit-smoothies" onClick={handleMenuClick}>
                Fruit Smoothies
              </a>
            </li>
            <li>
              <a href="#protein-smoothies" onClick={handleMenuClick}>
                Protein Smoothies
              </a>
            </li>
            <li>
              <a href="#squeezed-juice" onClick={handleMenuClick}>
                Squeezed Juice
              </a>
            </li>
          </ul>
        )}
        <Outlet />
      </nav>
    </Fragment>
  );
}

export default NavBar;
