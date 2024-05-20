import React from "react";
import "./ComponentConfigurationPanel.css";

const ComponentConfigurationPanel = ({ selectedComponent }) => {
  return (
    <div className="configuration-panel">
      {selectedComponent && (
        <div className="configuration-options">
          <h3>Configuration Options</h3>
          {selectedComponent === "openai3.5" && (
            <div>
              <label>Agent Name</label>
              <input type="text" placeholder="Enter agent name" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ComponentConfigurationPanel;
