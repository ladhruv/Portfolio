import React, { useContext } from "react";
import { ProjectContext } from "../context/projectContext";
import ProjectCard from "../components/projectCard";
import { PROJECTPICTURE } from "../constants/projectPhoto";
import DefaultPicture from "../assets/default.png";

const Project = () => {
  const projectContext = useContext(ProjectContext);
  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      {projectContext.project.map((project, index) => {
        return (
          <ProjectCard
            project={project}
            key={project.id}
            photo={
              PROJECTPICTURE[index] === undefined
                ? { link: DefaultPicture }
                : PROJECTPICTURE[index]
            }
          />
        );
      })}
    </div>
  );
};

export default Project;
