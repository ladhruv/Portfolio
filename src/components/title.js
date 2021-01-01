import React from "react";
import * as LABELS from "../constants/label";
import "../stylesheets/title.css";

const Title = () => {
  return (
    <div className="titleContainer">
      <h1 className="titleH1">{LABELS.SOFTWARE}</h1>
      <h1 className="titleH1" id="titleH2">
        {LABELS.LETTERE}
      </h1>
      <h1 className="titleH1" id="titleH3">
        {LABELS.GINEER}
      </h1>
    </div>
  );
};

export default Title;
