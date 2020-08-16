import React, { useRef, useState } from "react";
import "./style";
import { InputForm } from "../common/InputForm";
import { SuggestionList } from "../common/SuggestionsList";

// mock data from api
const suggestionsJSON = {
  users: [
    { name: "Målfrid", id: 1 },
    { name: "Målfrida", id: 2 },
    { name: "Roald", id: 3 },
    { name: "Roaldar", id: 4 },
    { name: "Ingvild", id: 5 },
    { name: "Hiruth", id: 6 },
    { name: "Eirik", id: 7 },
  ],
};

export const ViewAutocomplete = () => {
  const inputRef = useRef();
  const [inputStr, setInputStr] = useState(null);
  const [users, setUsers] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  const [activeLi, setActiveLi] = useState(null);

  const handleChange = (e) => {
    e.preventDefault();
    setUsers(suggestionsJSON.users);
    setInputStr(inputRef.current.value);
    if (inputRef.current.value.length > 1) {
      setSuggestions(
        users.filter(
          (user) =>
            user["name"].substr(0, inputStr.length).toLowerCase() ===
            inputStr.toLowerCase()
        )
      );
    }
  };

  const handleKeyDown = (e) => {
    let key = e.keyCode;

    switch (key) {
      case 40:
        activeLi === null ? setActiveLi(0) : setActiveLi(activeLi + 1);
        break;
      case 38:
        if (activeLi > suggestions.length) setActiveLi(activeLi - 1);
        break;
      case 13:
        setActiveLi(activeLi + 1);
        break;

      default:
        break;
    }
  };

  return (
    <section className="container autocomplete">
      Autocomplete View
      <InputForm
        handleChange={handleChange}
        handleKeyDown={handleKeyDown}
        inputRef={inputRef}
        className="autocomplete__input"
      />
      {suggestions && (
        <SuggestionList
          suggestions={suggestions}
          inputStr={inputStr}
          activeLi={activeLi}
          customClass="autocomplete__suggestions"
        />
      )}
    </section>
  );
};
