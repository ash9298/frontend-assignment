import React from "react";

const ProjectRow = ({ project, sNo }) => {
  const percentageFunded =
    project["percentage.funded"] !== undefined
      ? project["percentage.funded"]
      : "N/A";
  const amountPledged =
    project["amt.pledged"] !== undefined
      ? project["amt.pledged"].toLocaleString()
      : "N/A";

  return (
    <tr>
      <td>{sNo}</td>
      <td>{percentageFunded}</td>
      <td>{amountPledged}</td>
    </tr>
  );
};

export default ProjectRow;
