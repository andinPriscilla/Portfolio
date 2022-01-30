import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

import logo from "../../images/logo.png";

function Navigation() {
  return (
    <div>
      <nav className="nav">
        <Link className="logo" to="/about">
          <img src={logo} alt="" width="150px" />
        </Link>

        <ul>
          <li className="list">
            <Link to="/">home</Link>
          </li>
          <li className="list">
            <Link to="/work">Works</Link>
          </li>
          <li className="list">
            <Link to="/about">about</Link>
          </li>
          <li className="list">
            <Link to="/galary">galaria</Link>
          </li>
          <li className="list">
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
