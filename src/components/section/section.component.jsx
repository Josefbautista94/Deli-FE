import React from "react";
import SubSection from "../subsection/subSection.component";
import "./section.styles.css";

const Section = ({ section, numSection }) => {
  const { subSection } = section;
  return (
    <div
      className={`container ${
        numSection === 0 ? "single-column" : "two-column"
      }`}
    >
      {subSection ? (
        subSection.map(({ name, description, price, color }, index) => {
          return (
            <SubSection
              key={index}
              name={name}
              description={description}
              price={price}
              color={color}
            />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default Section;
