import React, { useState } from "react";
import "./subSection.styles.css";

const SubSection = ({ description, price, name, color }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(price);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="subSecDiv">
      <li className="subSec">
        <ul>
          {/* name of meal and price i also amde it so that if price is undefined to return null! */}
          {price ? (
            <h2 className="nameOfMeal" style={{ color }}>
              {name + " " + price}{" "}
            </h2>
          ) : (
            <h2 className="nameOfMeal" style={{ color }}>
              {name}{" "}
            </h2>
          )}
          <div className="descriptionDiv">
            {description ? (
              <div className="description">{description.join(", ")}</div>
            ) : (
              <></>
            )}
          </div>
        </ul>
      </li>
    </div>
  );
};

export default SubSection;
