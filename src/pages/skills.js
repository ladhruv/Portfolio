import React from "react";
import SkillCard from "../components/skillsCard";
import "../stylesheets/skills.css";
import { LANGUAGEDETAIL, FRAMEWORKTOOLS } from "../constants/skills";

const Skills = () => {
  return (
    <div className="skill-Container">
      <div className="skillSection">
        <span className="skillTitle">Languages</span>
        <div className="skillCardSection">
          {LANGUAGEDETAIL.languages.map((language) => {
            return (
              <SkillCard
                key={language.name}
                number={language.expertiseLevel}
                name={language.name}
                language={language.logo}
                color={language.color}
              />
            );
          })}
        </div>
        <span className="skillTitle" style={{ marginTop: "2em" }}>
          FrameWork/Tools
        </span>
        <div className="skillCardSection">
          {FRAMEWORKTOOLS.frameworks.map((framework) => {
            return (
              <SkillCard
                key={framework.name}
                number={framework.expertiseLevel}
                name={framework.name}
                color={framework.color}
                language={framework.logo}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
