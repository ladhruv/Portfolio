import React, { useState } from "react";
import "../stylesheets/projectCard.css";

const ProjectCard = ({ project, photo }) => {
  const [showBack, setShowBack] = useState(false);
  return (
    <div className="cardContainer">
      <div
        className={`${showBack ? "isFlipped" : ""} card`}
        onClick={() => setShowBack(!showBack)}
      >
        <div className="card__face front">
          <div className="backCardContent">
            <div className="card_Header">
              <img src={photo.link} alt="" className="photo"></img>
            </div>
            <div className="card_body">
              <a
                href={project.html_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none", color: "#399cf1" }}
              >
                <h2>{project.name}</h2>
              </a>
            </div>
          </div>
        </div>
        <div className="card__face back">
          <div className="backCardContent">
            <div className="backCardBody">
              <div>
                <label style={{ fontWeight: "600" }}>Languages: </label>
                <span>{project.language}</span>
              </div>
              <div style={{ marginTop: "0.5em" }}>
                <label style={{ fontWeight: "600" }}>Description: </label>
                <span>{project.description}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
