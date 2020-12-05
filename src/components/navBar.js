import React from "react";
import * as LABELS from "../constants/label";
import { HashLink } from "react-router-hash-link";
import "../stylesheets/navBar.css";

const navBar = () => {
  return (
    <div className="navBarContainer">
      <HashLink className="tabButton" smooth to="/">
        {LABELS.HOME}
      </HashLink>
      <HashLink className="tabButton" smooth to="/#project">
        {LABELS.PROJECTS}
      </HashLink>
      <HashLink className="tabButton" smooth to="/#experience">
        {LABELS.EXPERIENCE}
      </HashLink>
      <HashLink className="tabButton" smooth to="/#contact">
        {LABELS.CONTACT}
      </HashLink>
    </div>
  );
};
export default navBar;
