import React from "react";
import NavBar from "./navBar";
import Title from "./title";
import SectionLayout from "./sectionLayout";
import Skills from "../pages/skills";
import Project from "../pages/project";
import "../App.css";

const mainPage = () => {
  return (
    <>
      <div className="App">
        <NavBar />
        <Title />
        <div>
          <h3 style={{ color: "white" }}>Dhruv Lad</h3>
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
        <SectionLayout idTag="experience" titleName="EXPERIENCE" />
      </div>
    </>
  );
};

export default mainPage;
