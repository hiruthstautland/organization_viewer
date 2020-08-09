import React, { useRef, useEffect, useState } from "react";
import "./style";
import { InputForm } from "./../common/InputForm";
import { Suggestion } from "../common/SuggestionsList";

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

export const AutocompleteView = () => {
  const inputRef = useRef();
  const [inputStr, setInputStr] = useState(null);
  const [users, setUsers] = useState(null);
  const [suggestions, setSuggestions] = useState(null);
  //   let inputStr;

  useEffect(() => {
    let usersData = suggestionsJSON.users;
    setUsers(usersData);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInputStr(inputRef.current.value);

    if (inputRef.current.value.length >= 2) {
      setSuggestions(
        users.filter(
          (user) =>
            user["name"].substr(0, inputStr.length).toLowerCase() ===
            inputStr.toLowerCase()
        )
      );
    }
  };

  return (
    <section className="container">
      Autocomplete View
      <InputForm handleChange={handleChange} inputRef={inputRef} />
      {suggestions && (
        <Suggestion suggestions={suggestions} inputStr={inputStr} />
      )}
    </section>
  );
};
