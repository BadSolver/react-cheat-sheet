import React from "react";
import "./App.css";
import { Component } from "./components/Component/Component";

import { Navbar } from "./components/Navbar/Navbar";
import { Props } from "./components/Props/Props";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App-wrapper">
      <div className="App-main">
        <div className="App-navbar">
          <Navbar />
        </div>
        <div className="App-content">
          <div className="app-container">
            <Routes>
              <Route path="/" element={<Props />} />
              <Route path="/component" element={<Component />} />
              hello
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
