import React from "react";
import ProjectRow from "./ProjectRow";

function ProjectTable({ projects, startIndex }) {
  return (
    <table className="project-table">
      <thead>
        <tr>
          <th scope="col">S.No.</th>
          <th scope="col">Percentage Funded (%)</th>
          <th scope="col">Amount Pledged</th>
        </tr>
      </thead>
      <tbody>
        {projects.length > 0 ? (
          projects.map((project, index) => {
            const sNo = startIndex + index + 1;
            const key = project.url || `project-${sNo}`;
            return <ProjectRow key={key} project={project} sNo={sNo} />;
          })
        ) : (
          <tr>
            <td colSpan="3" style={{ textAlign: "center" }}>
              No projects to display.
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

export default ProjectTable;
