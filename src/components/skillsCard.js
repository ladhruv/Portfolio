import React from "react";
import ProgressBar from "./progressBar";

const skillsCard = (props) => {
  return (
    <div className="skillCard">
      <i className={`${props.language}`}></i>
      <span>{props.name}</span>
      <ProgressBar percentage={props.number} color={props.color} />
    </div>
  );
};

export default skillsCard;
