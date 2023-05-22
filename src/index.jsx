import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from "App";
import { Clock } from "components/Clock/Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
