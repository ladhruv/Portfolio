import React from "react";
import "../stylesheets/sectionLayout.css";

const SectionLayout = (props) => {
  return (
    <div id={props.idTag} className="sectionContainer">
      <div className="sectionLayout">
        <h1>{props.titleName}</h1>
      </div>
      {props.component}
    </div>
  );
};

export default SectionLayout;
