import React from "react";
import "./StackList.css";

const StackList = ({ stacks, onEditStack }) => {
  return (
    <div className="stack-list">
      {stacks.map((stack, index) => (
        <div className="stack-item" key={index}>
          <h3>{stack.name}</h3>
          <p>{stack.description}</p>
          <button className="edit-btn" onClick={onEditStack}>
            Edit Stack
          </button>
        </div>
      ))}
    </div>
  );
};

export default StackList;
