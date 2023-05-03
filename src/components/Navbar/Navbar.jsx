import React from "react";
import "./style.css";
import { Props } from "../Props/Props";
import { Link } from "react-router-dom";
// import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <h1 className="navbar-title">ОСНОВНАЯ ТЕОРИЯ ПО БИБЛИОТЕКЕ REACT</h1>
      <ul>
        <li> <Link to='/component'> Components </Link></li>
        <li>
          <a href={<Props></Props>}>Props</a> 
        </li>
        <li>State</li>
        <li>Lifecycle</li>
        <li>Events</li>
        <li>Key</li>
        <li>Refs</li>
        <li>Async requests</li>
        <li>Virtual DOM</li>
        <li>Fragment</li>
        <li>React.memo</li>
        <li>useEffect</li>
        <li>useContext</li>
        <li>Router</li>
        <li>Form</li>
      </ul>
    </div>
  );
};
