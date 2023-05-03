import React from "react";
import { Route, Routes } from "react-router-dom";
import route from "./routes";
import { Component, Home, Props, State } from "components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />}></Route>
      <Route path={route.COMPONENT} element={<Component />} />
      <Route path={route.PROPS} element={<Props />} />
      <Route path={route.STATE} element={<State />} />
      <Route path={route.LIFECYCLE} element={<Component />} />
      <Route path={route.EVENTS} element={<Component />} />
      <Route path={route.KEY} element={<Component />} />
      <Route path={route.REFS} element={<Component />} />
      <Route path={route.ASYNC} element={<Component />} />
      <Route path={route.DOM} element={<Component />} />
      <Route path={route.FRAGMENT} element={<Component />} />
      <Route path={route.MEMO} element={<Component />} />
      <Route path={route.EFFECT} element={<Component />} />
      <Route path={route.CONTEXT} element={<Component />} />
      <Route path={route.ROUTER} element={<Component />} />
      <Route path={route.FORM} element={<Component />} />
    </Routes>
  );
};
