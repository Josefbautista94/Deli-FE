import React, { useState } from "react";
import "./subSection.styles.css";

const SubSection = ({ description, name }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <li className="subSec">
        <ul>
          <li>{name}</li>

          <div>
            <ul className="list">
              {description ? (
                description.map((item, index) => (
                  <li key={index} className="description">
                    {item}
                  </li>
                ))
              ) : (
                <></>
              )}
            </ul>
          </div>
        </ul>
      </li>
    </div>
  );
};

export default SubSection;
