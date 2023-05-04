import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import route from "router/routes";

export const Navbar = () => {
  return (
    <div className="navbar-container">
      <Link to={route.HOME} className="navbar-link">
        <h1 className="navbar-title">ОСНОВНАЯ ТЕОРИЯ ПО БИБЛИОТЕКЕ REACT</h1>
      </Link>
      <ul>
        <li>
          <Link to={route.COMPONENT} className="navbar-link">
            Components
          </Link>
        </li>
        <li>
          <Link to={route.PROPS} className="navbar-link">
            Props
          </Link>
        </li>
        <li>
          <Link to={route.STATE} className="navbar-link">
            State
          </Link>
        </li>
        <li>
          <Link to={route.LIFECYCLE} className="navbar-link">
            Lifecycle
          </Link>
        </li>
        <li>
          <Link to={route.EVENTS} className="navbar-link">
            Events
          </Link>
        </li>
        <li>
          <Link to={route.KEY} className="navbar-link">
            Key
          </Link>
        </li>
        <li>
          <Link to={route.REFS} className="navbar-link">
            Refs
          </Link>
        </li>
        <li>
          <Link to={route.ASYNC} className="navbar-link">
            Async requests
          </Link>
        </li>
        <li>
          <Link to={route.DOM} className="navbar-link">
            Virtual DOM
          </Link>
        </li>
        <li>
          <Link to={route.FRAGMENT} className="navbar-link">
            Fragment
          </Link>
        </li>
        <li>
          <Link to={route.MEMO} className="navbar-link">
            React.memo
          </Link>
        </li>
        <li>
          <Link to={route.EFFECT} className="navbar-link">
            useEffect
          </Link>
        </li>
        <li>
          <Link to={route.CONTEXT} className="navbar-link">
            useContext
          </Link>
        </li>
        <li>
          <Link to={route.ROUTER} className="navbar-link">
            Router
          </Link>
        </li>
        <li>
          <Link to={route.FORM} className="navbar-link">
            Form
          </Link>
        </li>
      </ul>
    </div>
  );
};
