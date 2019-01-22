import React from "react";
import ProjectSummary from "./ProjectSummary";
import { Link } from "react-router-dom";

const ProjectList = ({ projects }) => {
  console.log("projects ===>", projects);
  return (
    <div className="project-list section">
      {projects &&
        projects.map(singleProject => {
          return (
            <Link to={"/project/" + singleProject.id} key={singleProject.id}>
              <ProjectSummary
                singleProject={singleProject}
                key={singleProject.id}
              />
            </Link>
          );
        })}
    </div>
  );
};

export default ProjectList;
