import React from "react";
import { Link } from "react-router-dom";

export const Navigation = () => {
  console.log("nav");
  return (
    <div className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <Link to="/autocomplete">Autocomplete</Link>
        </li>
        <li className="nav__item">
          <Link>Page 2</Link>
        </li>
        <li className="nav__item">
          <Link>Page 3</Link>
        </li>
      </ul>
    </div>
  );
};
