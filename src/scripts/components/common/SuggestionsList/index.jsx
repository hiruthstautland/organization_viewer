import React from "react";
import "./style";

export const Suggestion = ({ suggestions, inputStr }) => {
  return (
    <ul className="suggestions">
      {suggestions.map((suggestion) => {
        let userName = suggestion["name"].split("");
        // let input = inputStr.split("");
        return (
          <li className="suggestions__item" key={suggestion.id}>
            {userName.map((letter) => {
              console.log(inputStr);
              if (
                letter.substr(0, inputStr.length).toUpperCase() ===
                inputStr.toUpperCase()
              ) {
                return <strong>{letter.substr(0, inputStr.length)}</strong>;
              }
            })}
          </li>
        );
      })}
    </ul>
  );
};
