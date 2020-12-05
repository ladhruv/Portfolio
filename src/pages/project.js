import React, { useContext } from "react";
import { ProjectContext } from "../context/projectContext";
import { Table } from "evergreen-ui";

const Project = () => {
  const projectContext = useContext(ProjectContext);
  return (
    <div className="projectTableContainer">
      <Table>
        <Table.Head height={70} style={{ backgroundColor: "#e2b281" }}>
          <Table.TextHeaderCell>Name</Table.TextHeaderCell>
          <Table.TextHeaderCell>Created at</Table.TextHeaderCell>
          <Table.TextHeaderCell>Github Link</Table.TextHeaderCell>
          <Table.TextHeaderCell>Description</Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={"100%"}>
          {projectContext.project.map((project) => (
            <Table.Row key={project.id} height={70}>
              <Table.TextCell textProps={{ size: 500, fontWeight: "800" }}>
                {project.name}
              </Table.TextCell>
              <Table.TextCell>{project.created_at}</Table.TextCell>
              <Table.TextCell>
                <span>
                  <a
                    href={project.html_url}
                    style={{ textDecoration: "none", color: "blue" }}
                  >
                    <i
                      className="fab fa-github"
                      style={{ fontSize: "large" }}
                    ></i>
                  </a>
                </span>
              </Table.TextCell>
              <Table.TextCell>{project.description}</Table.TextCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default Project;
