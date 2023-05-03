import React from "react";
import "./App.css";

import { Navbar } from "./components/Navbar/Navbar";
import { AppRouter } from "router/AppRouter";

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
