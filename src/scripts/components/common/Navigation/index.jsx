import React from "react";
import { Link } from "react-router-dom";
import "./style.scss";

export const Navigation = () => (
  <div className="nav">
    <ul className="nav__list">
      <li className="nav__item">
        <Link to="/autocomplete">Autocomplete</Link>
      </li>
      <li className="nav__item">
        <Link to="/button">Button</Link>
      </li>
      <li className="nav__item">
        <Link to="/grid">Grid</Link>
      </li>
    </ul>
  </div>
);
