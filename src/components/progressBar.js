import React from "react";
import Filter from "./filter";
import "../stylesheets/progressBar.css";

const ProgressBar = (props) => {
  return (
    <div className="progress-Bar">
      <Filter percentage={props.percentage} color={props.color} />
    </div>
  );
};

export default ProgressBar;
