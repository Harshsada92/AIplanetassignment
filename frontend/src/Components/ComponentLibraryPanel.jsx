import React from "react";
import "./ComponentLibraryPanel.css";

const ComponentLibraryPanel = ({ handleComponentSelection }) => {
  return (
    <div className="component-library-panel">
      <h3>Agents</h3>
      <div className="component-list">
        <div
          className="component-item"
          onClick={() => handleComponentSelection("openai3.5")}
        >
          OpenAI 3.5
        </div>
      </div>
      <h3>Tools</h3>
      <div className="component-list">
        <div
          className="component-item"
          onClick={() => handleComponentSelection("wikisearch")}
        >
          Wikisearch
        </div>
      </div>
      <h3>LLMs</h3>
      <div className="component-list">
        <div
          className="component-item"
          onClick={() => handleComponentSelection("openai3.5")}
        >
          OpenAI 3.5
        </div>
      </div>
    </div>
  );
};

export default ComponentLibraryPanel;
