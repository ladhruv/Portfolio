import React from "react";
import "../stylesheets/sectionLayout.css";

const SectionLayout = (props) => {
  return (
    <div id={props.idTag} className="sectionContainer">
      <div
        style={{
          borderBottom: "3px solid #333",
          width: "90%",
          margin: "auto",
          marginBottom: "2em",
        }}
      >
        <div className="sectionLayout">
          <h1>{props.titleName}</h1>
        </div>
      </div>
      {props.component}
    </div>
  );
};

export default SectionLayout;
