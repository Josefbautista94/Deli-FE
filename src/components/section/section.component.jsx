// import React, { useState } from "react";
import SubSection from "../subsection/subSection.component";
import "./section.styles.css";

const section = (props) => {
  console.log(props);

  return (
    <div
      className={`container ${props === 1 ? "single-column" : "two-column"}`}
    >
      {props.section ? (
        props.section.map(({ name, description }) => {
          return <SubSection name={name} description={description} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
};
export default section;
