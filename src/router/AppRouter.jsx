import React from "react";
import { Route, Routes } from "react-router-dom";
import route from "./routes";
import { Component } from "../components/Component/Component";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<Component />}>
        <Route path={route.COMPONENT} />
      </Route>
    </Routes>
  );
};
