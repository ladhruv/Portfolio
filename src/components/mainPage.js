import React from "react";
import NavBar from "./navBar";
import Title from "./title";
import SectionLayout from "./sectionLayout";
import Skills from "../pages/skills";
import Project from "../pages/project";
import Experience from "../pages/experience";
import "../App.css";

const mainPage = () => {
  console.log("test this page");
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
        <SectionLayout
          idTag="experience"
          titleName="EXPERIENCE"
          component={<Experience />}
        />
      </div>
    </>
  );
};

export default mainPage;
