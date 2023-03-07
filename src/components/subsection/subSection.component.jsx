import React, { useState } from "react";
import "./subSection.styles.css";

const SubSection = ({ description, price, name }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log(price);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="subSecDiv">
      <li className="subSec">
        <ul>
          {/* name of meal */}
          <h2 className="nameOfMeal">{name + " " + price} </h2>
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
