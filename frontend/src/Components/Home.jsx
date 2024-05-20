import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import StackList from "./StackList";
import CreateStackModal from "./CreateStackModal";

const Home = () => {
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newStackName, setNewStackName] = useState("");
  const [newStackDescription, setNewStackDescription] = useState("");
  const [stacks, setStacks] = useState([]);
  const navigate = useNavigate();

  const handleCreateStack = () => {
    setShowCreateModal(true);
  };

  const handleCloseModal = () => {
    setShowCreateModal(false);
    setNewStackName("");
    setNewStackDescription("");
  };

  const handleSubmit = () => {
    setStacks([
      ...stacks,
      { name: newStackName, description: newStackDescription },
    ]);
    handleCloseModal();
  };

  const handleEditStack = () => {
    navigate("/edit-stack");
  };

  return (
    <div>
      <Header handleCreateStack={handleCreateStack} />
      <main className="main">
        <StackList stacks={stacks} onEditStack={handleEditStack} />
      </main>
      {showCreateModal && (
        <CreateStackModal
          newStackName={newStackName}
          setNewStackName={setNewStackName}
          newStackDescription={newStackDescription}
          setNewStackDescription={setNewStackDescription}
          handleCloseModal={handleCloseModal}
          handleSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default Home;
