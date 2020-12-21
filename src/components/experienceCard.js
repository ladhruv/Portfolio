import React from "react";

const experienceCard = ({ experience }) => {
  return (
    <div style={{ width: "95%" }}>
      <h1 className="experienceName">{experience.jobTitle}</h1>
      <h3 style={{ margin: "0", paddingInlineStart: "1em", color: "gray" }}>
        {experience.name}
      </h3>
      <div className="experienceTimeFrame">
        <div className="experienceInfo">
          <i className="fas fa-calendar-alt" style={{ color: "#6393ff" }}></i>
          <h4 style={{ color: "gray" }}>{experience.timeFrame}</h4>
        </div>
        <div className="experienceInfo">
          <i className="fas fa-map-marker-alt" style={{ color: "#e05d0f" }}></i>
          <h5 style={{ color: "gray" }}>{experience.location}</h5>
        </div>
      </div>
      {experience.description.map((item, index) => {
        return (
          <li
            key={index}
            style={{ marginBottom: "1.5%", paddingInlineStart: "1em" }}
          >
            {item}
          </li>
        );
      })}
    </div>
  );
};

export default experienceCard;
