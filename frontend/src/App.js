import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import EditStackPage from "./Components/EditStackPage";
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <header className="header">
          <div className="logo">GenAI Stack</div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/edit-stack" element={<EditStackPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
