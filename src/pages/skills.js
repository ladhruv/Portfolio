import React from "react";
import "../stylesheets/skills.css";

const Skills = () => {
  return (
    <div className="skill-Container">
      <div className="skillSection">
        <h2>Languages</h2>
        <div className="skillInfo">
          <i className="fab fa-java" style={{ color: "rgb(83, 130, 161)" }}></i>
          <i
            className="fab fa-js-square"
            style={{ color: "rgb(240, 219, 79)" }}
          ></i>
          <i
            className="fab fa-python"
            style={{ color: "rgb(240, 219, 79)" }}
          ></i>
          <i className="fab fa-cuttlefish" style={{ color: "lightblue" }}></i>
        </div>
        <div>
          <p>
            Languages I have used during my time at University and projects that
            I have built.
          </p>
        </div>
      </div>
      <div className="skillSection">
        <h2>Front-End</h2>
        <div className="skillInfo">
          <i
            className="fab fa-react"
            style={{ color: "rgb(97, 219, 251)" }}
          ></i>
          <i
            className="fab fa-css3-alt"
            style={{ color: "rgb(41, 101, 241)" }}
          ></i>
          <i
            className="fab fa-html5"
            style={{ color: "rgb(240, 101, 41)" }}
          ></i>
          <i
            className="devicon-bootstrap-plain"
            style={{ color: "#563d7c" }}
          ></i>
        </div>
        <div>
          <p>
            My prefered techonologies for frontend web development and component
            design.
          </p>
        </div>
      </div>
      <div className="skillSection">
        <h2>Back-End</h2>
        <div className="skillInfo backendElement">
          <i
            className="devicon-nodejs-plain"
            style={{ color: "rgb(104, 160, 99)" }}
          ></i>
          <i
            className="devicon-express-original"
            style={{ color: "darkgray" }}
          ></i>
          <i
            className="devicon-mongodb-plain"
            style={{ color: "rgb(63, 160, 55)" }}
          ></i>
          <i
            className="devicon-postgresql-plain"
            style={{ color: "#336791" }}
          ></i>
        </div>
        <div>
          <p>
            My prefered techonologies for backend web development and data
            architecture.
          </p>
        </div>
      </div>
      <div className="skillSection">
        <h2>Tools</h2>
        <div className="skillInfo">
          <i
            className="devicon-visualstudio-plain"
            style={{ color: "#0078d7" }}
          ></i>
          <i
            className="devicon-github-original"
            style={{ color: "#3E2C00" }}
          ></i>
          <i className="fab fa-product-hunt" style={{ color: "#EF5B25" }}></i>
          <i className="fab fa-jira" style={{ color: "#0052CC" }}></i>
        </div>
        <div>
          <p>
            Tools and Framework I have used for building projects or code
            editing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
