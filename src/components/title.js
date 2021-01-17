import React from "react";
import * as LABELS from "../constants/label";
import "../stylesheets/title.css";

const Title = () => {
  return (
    <div className="titleContainer">
      <h1 className="titleH1">{LABELS.NAME}</h1>
    </div>
  );
};

export default Title;
