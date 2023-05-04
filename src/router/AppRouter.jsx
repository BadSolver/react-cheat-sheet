import React from "react";
import { Route, Routes } from "react-router-dom";
import route from "./routes";
import {
  Async,
  Component,
  Context,
  Effect,
  Events,
  Form,
  Fragment,
  Home,
  Key,
  Lifecycle,
  Memo,
  Props,
  Refs,
  RouterComponent,
  State,
  VirtualDom,
} from "components";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path={route.HOME} element={<Home />}></Route>
      <Route path={route.COMPONENT} element={<Component />} />
      <Route path={route.PROPS} element={<Props />} />
      <Route path={route.STATE} element={<State />} />
      <Route path={route.LIFECYCLE} element={<Lifecycle />} />
      <Route path={route.EVENTS} element={<Events />} />
      <Route path={route.KEY} element={<Key />} />
      <Route path={route.REFS} element={<Refs />} />
      <Route path={route.ASYNC} element={<Async />} />
      <Route path={route.DOM} element={<VirtualDom />} />
      <Route path={route.FRAGMENT} element={<Fragment />} />
      <Route path={route.MEMO} element={<Memo />} />
      <Route path={route.EFFECT} element={<Effect />} />
      <Route path={route.CONTEXT} element={<Context />} />
      <Route path={route.ROUTER} element={<RouterComponent />} />
      <Route path={route.FORM} element={<Form />} />
    </Routes>
  );
};
