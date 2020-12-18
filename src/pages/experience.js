import React from "react";
import { EXPERIENCE } from "../constants/experience";
import ExperienceCard from "../components/experienceCard";
import "../stylesheets/experience.css";

const experience = () => {
  return (
    <div className="experience-Container">
      {EXPERIENCE.jobs.map((job, index) => {
        return <ExperienceCard key={index} experience={job} />;
      })}
    </div>
  );
};

export default experience;
