import React from "react";
import "./header.styles.css";

const Header = ({ headerItem }) => {
  const { title, subHeader } = headerItem;
  const headerColors = {
    "SIGNATURE SANDWICHES": "rgb(32, 73, 155)",
    "STEAKS N' CHEESE": "rgb(255, 75, 0)",
    BREAKFAST: "rgb(239, 197, 26)",
    "ANGUS BURGERS": "rgb(42, 42, 41)",
    "FRUIT SMOOTHIES": "rgb(30, 150, 136)",
    "PROTEIN SMOOTHIES": "rgb(50, 162, 239)",
    "SQUEEZED JUICE": "rgb(55, 172, 70)",
  };
  const headerColor = headerColors[title] || "black";

  // if (title === "SIGNATURE SANDWICHES") {
  //   headerColor = "rgb(32,73,155)";
  // } else if (title === "STEAKS N' CHEESE") {
  //   headerColor = "rgb(255, 75, 0)";
  // } else if (title === "BREAKFAST") {
  //   headerColor = "rgb(239, 197, 26)";
  // } else if (title === "ANGUS BURGERS") {
  //   headerColor = "rgb(42, 42, 41)";
  // } else if (title === "FRUIT SMOOTHIES") {
  //   headerColor = "rgb(30, 150, 136)";
  // } else if (title === "PROTEIN SMOOTHIES") {
  //   headerColor = "rgb(50, 162, 239)";
  // } else if (title === "SQUEEZED JUICE") {
  //   headerColor = "rgb(55, 172, 70)";
  // } else if (title === "BREAKFAST") {
  //   headerColor = "rgb(42,42,41)";
  // } else if (title === "BREAKFAST") {
  //   headerColor = "rgb(42,42,41)";
  // }
  return (
    <div className="header-container">
      <h1 className="header-title" style={{ backgroundColor: headerColor }}>
        {title}
      </h1>
      {subHeader ? (
        <div>
          <h2>
            <b>This is where the subheader goes: </b>
            {subHeader.name}
          </h2>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Header;
