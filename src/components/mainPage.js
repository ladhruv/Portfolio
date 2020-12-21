import React from "react";
import NavBar from "./navBar";
import Menu from "./menu";
import Title from "./title";
import SectionLayout from "./sectionLayout";
import Skills from "../pages/skills";
import Project from "../pages/project";
import Experience from "../pages/experience";
import useWindowSize from "../utils/WindowSize";
import "../App.css";

const MainPage = () => {
  const { width } = useWindowSize();
  return (
    <>
      <div className="App">
        {width > 500 ? <NavBar /> : <Menu />}
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

export default MainPage;
