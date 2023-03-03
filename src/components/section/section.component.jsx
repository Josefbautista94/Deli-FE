// import React, { useState } from "react";
import SubSection from "../subsection/subSection.component";
import "./section.styles.css";

const section = ({ section, numSection }) => {
  const { subSection } = section;
  return (
    <div
      className={`container ${
        numSection === 1 ? "single-column" : "two-column"
      }`}
    >
      {subSection ? (
        subSection.map(({ name, description }, index) => {
          return (
            <SubSection key={index} name={name} description={description} />
          );
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default section;
