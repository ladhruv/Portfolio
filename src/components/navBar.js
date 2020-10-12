import React from 'react';
import {Button} from "evergreen-ui";
import * as LABELS from "../constants/label";
import "../stylesheets/navBar.css";

import '../App.css';
const navBar = () => {
    return (
        <div className="navBarContainer">
            <Button className="tabButton" appearance="minimal">{LABELS.HOME}</Button>
            <Button className="tabButton" appearance="minimal">{LABELS.PROJECTS}</Button>
            <Button className="tabButton" appearance="minimal">{LABELS.CONTACT}</Button>
        </div>
    );
};

export default navBar;