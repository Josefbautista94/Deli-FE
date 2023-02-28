import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.styles.css";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <Link to="/" className="logo">
          Ft Tryon Deli & Juice Bar{" "}
        </Link>
        <button className="menu-button" onClick={handleMenuClick}>
          <i className="fa fa-bars">MENU</i>
        </button>
      </div>
      {isMenuOpen && (
        <ul className="menu right">
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/fresh-salads">Fresh Salads</Link>
          </li>
          <li>
            <Link to="/grilled-cheese">Grilled Cheese</Link>
          </li>
          <li>
            <Link to="/halal-food">Halal Food</Link>
          </li>
          <li>
            <Link to="/signature-sandwiches">Signature Sandwiches</Link>
          </li>
          <li>
            <Link to="/steaks-n-cheese">Steaks n' Cheese</Link>
          </li>
          <li>
            <Link to="/breakfast">Breakfast</Link>
          </li>
          <li>
            <Link to="/angus-burgers">Angus Burgers</Link>
          </li>
          <li>
            <Link to="/fruit-smoothies">Fruit Smoothies</Link>
          </li>
          <li>
            <Link to="/protein-smoothies">Protein Smoothies</Link>
          </li>
          <li>
            <Link to="/squeezed-juice">Squeezed Juice</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}

export default NavBar;
