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
        <span className="nav__link">Views</span>
        <ul className="nav__list-drop">
          <li className="nav__item-drop">
            <Link className="nav__link" to="/view-autocomplete">
              Autocomplete
            </Link>
          </li>
          <li className="nav__item-drop">
            <Link className="nav__link" to="/view-mediaqueries">
              Media Queries
            </Link>
          </li>
          <li className="nav__item-drop">
            <Link className="nav__link" to="/view-buttons">
              Buttons
            </Link>
          </li>
          <li className="nav__item-drop">
            <Link className="nav__link" to="/view-myroad">
              My Road
            </Link>
          </li>
          <li className="nav__item-drop">
            <Link className="nav__link" to="/view-yourroad">
              Your Road
            </Link>
          </li>
          <li className="nav__item-drop">
            <Link className="nav__link" to="/view-myradio">
              My Radio
            </Link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
);
