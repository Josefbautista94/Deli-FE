import React, { useState } from "react";
import "./subSection.styles.css";

const SubSection = ({ description, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="subSecDiv">
      <li className="subSec">
        <ul>
          {/* name of meal */}
          <h2 className="nameOfMeal">{name} </h2>
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
