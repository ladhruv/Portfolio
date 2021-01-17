import React from "react";
import NavBar from "./navBar";
import Menu from "./menu";
import Title from "./title";
import SectionLayout from "./sectionLayout";
import Skills from "../pages/skills";
import Project from "../pages/project";
import Experience from "../pages/experience";
import SocialMedia from "./socialMedia";
import useWindowSize from "../utils/WindowSize";
import * as LABELS from "../constants/label";
import "../App.css";

const MainPage = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="App">
        {width > 500 ? <NavBar /> : <Menu />}
        <Title />
        <div className="positionNameContainer">
          <h2 className="positionName">{LABELS.POSITONTITLEONE}</h2>
          <h2 className="positionName"> - </h2>
          <h2 className="positionName" style={{ color: "red" }}>
            {LABELS.POSITONTITLETWO}
          </h2>
          <h2 className="positionName"> - </h2>
          <h2 className="positionName">{LABELS.POSITONTITLETHREE}</h2>
        </div>
        <SocialMedia />
        <div className="downArrow bounce">
          <i
            className="fas fa-arrow-circle-down"
            style={{ color: "white", height: "40px", fontSize: "40px" }}
          ></i>
        </div>
      </div>

      <div>
        <SectionLayout
          idTag="skills"
          titleName="TECHNICAL SKILLS"
          component={<Skills />}
        />
        <SectionLayout
          idTag="project"
          titleName="PROJECT"
          component={<Project />}
        />
        <SectionLayout
          idTag="experience"
          titleName="EXPERIENCE"
          component={<Experience />}
        />
      </div>
    </>
  );
};

export default MainPage;
