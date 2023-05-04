import React from "react";
import "./App.css";
import { AppRouter } from "router";
import { Navbar } from "components";

function App() {
  return (
    <div className="app-wrapper">
      <div className="app-main">
        <div className="app-navbar">
          <Navbar />
        </div>
        <div className="app-content">
          <div className="app-container">
            <AppRouter />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
