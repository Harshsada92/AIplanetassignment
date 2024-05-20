import React, { useState } from "react";
import "./EditStackPage.css";

const Dropdown = ({ label, options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleDropdownClick = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      <button className="dropdown-toggle" onClick={handleDropdownClick}>
        {selectedOption || label}
      </button>
      {isOpen && (
        <div className="dropdown-menu">
          {options.map((option) => (
            <div
              key={option}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const EditStackPage = () => {
  const [selectedComponent, setSelectedComponent] = useState(null);
  const [workflow, setWorkflow] = useState([]);

  const handleComponentSelection = (component, type) => {
    setSelectedComponent(component);
    setWorkflow([...workflow, { type, name: component, config: {} }]);
  };

  const handleBuild = async () => {
    try {
      const response = await fetch("http://localhost:8000/build", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ components: workflow }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Build failed");
      }
    } catch (error) {
      console.error("Error building workflow:", error);
    }
  };

  const handleRun = async () => {
    try {
      const response = await fetch("http://localhost:8000/run", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ components: workflow }),
      });
      if (response.ok) {
        const data = await response.json();
        alert(data.message);
      } else {
        alert("Run failed");
      }
    } catch (error) {
      console.error("Error running workflow:", error);
    }
  };

  return (
    <div className="edit-stack-page">
      <header className="header">
        <div className="logo">Chat with PDF</div>
      </header>
      <main className="main">
        <div className="component-library-panel">
          <h3>Agents</h3>
          <Dropdown
            label="Select an Agent"
            options={["Agent1", "Agent2"]}
            onSelect={(component) =>
              handleComponentSelection(component, "agent")
            }
          />

          <h3>Tools</h3>
          <Dropdown
            label="Select a Tool"
            options={["DuckDuckGoSearch", "GMail", "GitHub"]}
            onSelect={(component) =>
              handleComponentSelection(component, "tool")
            }
          />

          <h3>LLMs</h3>
          <Dropdown
            label="Select an LLM"
            options={["Azure OpenAI", "OpenAI GPT 3.5", "OpenAI GPT 4"]}
            onSelect={(component) => handleComponentSelection(component, "llm")}
          />
        </div>
        <div className="workspace-panel">
          <div className="canvas">
            {selectedComponent && (
              <div className="selected-component">
                <h3>{selectedComponent}</h3>
              </div>
            )}
          </div>
        </div>
        <div className="configuration-panel">
          {selectedComponent && (
            <div className="configuration-options">
              <h3>Configuration Options</h3>
              {selectedComponent === "Agent1" && (
                <div>
                  <label>Agent Name</label>
                  <input type="text" placeholder="Enter agent name" />
                </div>
              )}
              {/* Add configuration options for other components if necessary */}
            </div>
          )}
        </div>
      </main>
      <div className="execution-controls">
        <button className="build-btn" onClick={handleBuild}>
          Build Stack
        </button>
        <button className="run-btn" onClick={handleRun}>
          Run Stack
        </button>
      </div>
    </div>
  );
};

export default EditStackPage;
