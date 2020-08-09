import React from "react";
import "./style";

export const Suggestion = ({ suggestions }) => (
  <ul className="suggestions">
    {suggestions.map((sug) => {
      return (
        <li className="suggestions__item" key={sug.id}>
          {sug["name"]}
        </li>
      );
    })}
  </ul>
);
