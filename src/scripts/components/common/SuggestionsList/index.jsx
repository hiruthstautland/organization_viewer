import React from "react";
import "./style";

export const SuggestionList = ({ suggestions, activeLi, inputStr }) => (
  <ul className="suggestions">
    {suggestions.map((suggestion, i) => {
      let matchStr = suggestion.name.substr(0, inputStr.length).toLowerCase();
      let sugStr = suggestion.name.substr(inputStr.length).toLowerCase();
      let active = i === activeLi;
      console.log("index", i);
      console.log("activeLi", activeLi);
      return (
        <li
          className={active ? "suggestions__item-active" : "suggestions__item"}
          key={suggestion.id}
        >
          {matchStr === inputStr.toLowerCase() && (
            <span>
              {matchStr}
              <strong>{sugStr}</strong>
            </span>
          )}
        </li>
      );
    })}
  </ul>
);
