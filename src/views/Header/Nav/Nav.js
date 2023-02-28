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
      </div>
    );
  }
}

export default Nav;
