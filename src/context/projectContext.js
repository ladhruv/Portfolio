import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProjectContext = createContext();
export const ProjectProvider = ({ children }) => {
  const [project, setProject] = useState([]);
  useEffect(() => {
    const fetchRepo = async () => {
      const response = await axios.get(
        "https://api.github.com/users/ladhruv/repos"
      );
      console.log(response.data);
      setProject(response.data);
    };
    fetchRepo();
  }, []);
  return (
    <ProjectContext.Provider
      value={{
        project: project,
      }}
    >
      {children}
    </ProjectContext.Provider>
  );
};
