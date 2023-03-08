import React from "react";
import { NavLink } from "react-router-dom";

import "./Nav.css";

class Nav extends React.Component {
  render() {
    return (
      <div className="topnav">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/TodoList"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          TodoList
        </NavLink>
        <NavLink
          to="/TrafficLights"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          TrafficLights
        </NavLink>
        <NavLink
          to="/Netlify"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Netlify
        </NavLink>
        <NavLink
          to="/Supermomos"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Supermomos
        </NavLink>
      </div>
    );
  }
}

export default Nav;
