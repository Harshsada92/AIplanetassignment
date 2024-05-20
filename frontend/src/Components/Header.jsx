import React from "react";
import "./Header.css";

const Header = ({ handleCreateStack }) => {
  return (
    <header className="header">
      <div className="logo">GenAI Stack</div>
      <button className="new-stack-btn" onClick={handleCreateStack}>
        + New Stack
      </button>
    </header>
  );
};

export default Header;
