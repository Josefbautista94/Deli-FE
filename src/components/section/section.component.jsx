import React, { useState } from "react";
import "./section.styles.css";

function Section() {
  const [numSections, setNumSections] = useState(2);

  const handleButtonClick = () => {
    setNumSections(numSections === 2 ? 1 : 2);
  };

  return (
    <div className={`container ${numSections === 1 ? "single-column" : ""}`}>
      {numSections === 2 ? (
        <>
          <div className="column">
            <h2>Sandwiches</h2>
            <ul>
              <li>Roast beef</li>
              <li>Turkey</li>
              <li>Ham and cheese</li>
            </ul>
          </div>
          <div className="column">
            <h2>Sides</h2>
            <ul>
              <li>Chips</li>
              <li>Macaroni salad</li>
              <li>Fruit cup</li>
            </ul>
          </div>
        </>
      ) : (
        <div className="column">
          <h2>Deli Menu</h2>
          <ul>
            <li>Roast beef sandwich</li>
            <li>Turkey sandwich</li>
            <li>Ham and cheese sandwich</li>
            <li>Chips</li>
            <li>Macaroni salad</li>
            <li>Fruit cup</li>
          </ul>
        </div>
      )}
      <button onClick={handleButtonClick}>Toggle Sections</button>
    </div>
  );
}
export default Section;
