import React from "react";
import "./CreateStackModal.css";

const CreateStackModal = ({
  newStackName,
  setNewStackName,
  newStackDescription,
  setNewStackDescription,
  handleCloseModal,
  handleSubmit,
}) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Create New Stack</h2>
        <input
          type="text"
          placeholder="Name"
          value={newStackName}
          onChange={(e) => setNewStackName(e.target.value)}
        />
        <textarea
          placeholder="Description"
          value={newStackDescription}
          onChange={(e) => setNewStackDescription(e.target.value)}
        />
        <div className="modal-actions">
          <button className="cancel-btn" onClick={handleCloseModal}>
            Cancel
          </button>
          <button className="create-btn" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateStackModal;
