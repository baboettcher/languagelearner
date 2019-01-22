import React from "react";
import moment from "moment";

const ProjectSummary = ({ singleProject }) => {
  const time = moment(singleProject.createdAt.toDate().toString()).calendar();
  console.log(time);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{singleProject.title}</span>
        <p>
          {singleProject.authorFirst} {singleProject.authorLast}
        </p>
        <p className="grey-text">{time}</p>
      </div>
    </div>
  );
};

export default ProjectSummary;
