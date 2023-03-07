import { Fragment, useState } from "react";
import { Link, Outlet } from "react-router-dom";
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
              <Link to="/menu#fresh-salads" onClick={handleMenuClick}>
                Fresh Salads
              </Link>
            </li>
            <li>
              <Link to="/menu#grilled-cheese" onClick={handleMenuClick}>
                Grilled Cheese
              </Link>
            </li>
            <li>
              <Link to="/menu#halal-food" onClick={handleMenuClick}>
                Halal Food
              </Link>
            </li>
            <li>
              <Link to="/menu1#signature-sandwiches" onClick={handleMenuClick}>
                Signature Sandwiches
              </Link>
            </li>
            <li>
              <Link to="/menu1#steaks-n-cheese" onClick={handleMenuClick}>
                Steaks n' Cheese
              </Link>
            </li>
            <li>
              <Link to="/menu2#breakfast" onClick={handleMenuClick}>
                Breakfast
              </Link>
            </li>
            <li>
              <Link to="/menu2#angus-burgers" onClick={handleMenuClick}>
                Angus Burgers
              </Link>
            </li>
            <li>
              <Link to="/menu3#fruit-smoothies" onClick={handleMenuClick}>
                Fruit Smoothies
              </Link>
            </li>
            <li>
              <Link to="/menu3#protein-smoothies" onClick={handleMenuClick}>
                Protein Smoothies
              </Link>
            </li>
            <li>
              <Link to="/menu3#squeezed-juice" onClick={handleMenuClick}>
                Squeezed Juice
              </Link>
            </li>
          </ul>
        )}
        <Outlet />
      </nav>
    </Fragment>
  );
}

export default NavBar;
