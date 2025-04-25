import React from "react";

const StatusIndicator = ({ isLoading, error }) => {
  if (isLoading) {
    return (
      <div id="status-message" role="status">
        Loading projects...
      </div>
    );
  }
  if (error) {
    return (
      <div id="status-message" role="alert" style={{ color: "red" }}>
        {error}
      </div>
    );
  }
  return null;
};

export default StatusIndicator;
