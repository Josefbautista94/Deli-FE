import React from "react";
import "./header.styles.css";

const Header = ({ headerItem }) => {
  const { title, color, subHeader } = headerItem;

  return (
    <div className="header-container">
      <h1 className="header-title" style={{ backgroundColor: color }}>
        {title}
      </h1>
      {subHeader ? (
        <div class="sub-container">
          <h2 class="sub">{subHeader.name}</h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;

// const headerColors = {
//   "SIGNATURE SANDWICHES": "rgb(32, 73, 155)",
//   "STEAKS N' CHEESE": "rgb(255, 75, 0)",
//   BREAKFAST: "rgb(239, 197, 26)",
//   "ANGUS BURGERS": "rgb(42, 42, 41)",
//   "FRUIT SMOOTHIES": "rgb(30, 150, 136)",
//   "PROTEIN SMOOTHIES": "rgb(50, 162, 239)",
//   "SQUEEZED JUICE": "rgb(55, 172, 70)",
// };
// const headerColor = headerColors[title] || "black";
