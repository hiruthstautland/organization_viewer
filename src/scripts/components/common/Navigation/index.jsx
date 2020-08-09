import React from "react";
import { HeartLogo } from "./../HeartLogo";
import { Link } from "react-router-dom";
import "./style.scss";

export const Navigation = () => (
  <nav className="nav">
    <span className="nav__brand">
      <HeartLogo />
    </span>
    <ul className="nav__list">
      <li className="nav__item">
        <Link className="nav__link" to="/autocomplete">Autocomplete</Link>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/button">Button</Link>
      </li>
      <li className="nav__item">
        <Link className="nav__link" to="/grid">Grid</Link>
      </li>
    </ul>
  </nav>
);
