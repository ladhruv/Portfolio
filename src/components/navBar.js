import React from "react";
import * as LABELS from "../constants/label";
import { HashLink } from "react-router-hash-link";
import Contact from "../pages/contact";
import "../stylesheets/navBar.css";

const NavBar = () => {
  const [state, setState] = React.useState({
    isShown: false,
  });

  const handleClostDialog = () => {
    setState({ isShown: false });
  };

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
      <div className="tabButton" onClick={() => setState({ isShown: true })}>
        {LABELS.CONTACT}
      </div>
      {state.isShown ? (
        <Contact isShown={state.isShown} closeDialog={handleClostDialog} />
      ) : (
        <></>
      )}
    </div>
  );
};
export default NavBar;
