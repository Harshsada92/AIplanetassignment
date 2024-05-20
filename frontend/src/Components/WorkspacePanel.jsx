import React from "react";
import "./WorkspacePanel.css";

const WorkspacePanel = ({ selectedComponent }) => {
  return (
    <div className="workspace-panel">
      <div className="canvas">
        {selectedComponent && (
          <div className="selected-component">
            <h3>{selectedComponent}</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkspacePanel;
