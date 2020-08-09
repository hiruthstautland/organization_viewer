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
  const [users, setUsers] = useState(null);
  const [suggestions, setSuggestions] = useState(null);

  useEffect(() => {
    let usersData = suggestionsJSON.users;
    setUsers(usersData);
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    let input = inputRef.current.value;

    if (input.length >= 2) {
      setSuggestions(
        users.filter(
          (user) =>
            user["name"].substr(0, input.length).toLowerCase() ===
            input.toLowerCase()
        )
      );
      //     return `
      //           user["name"].substr(0, input.length) +
      //           ".." +
      //           user["name"].substr(input.length)
      //         `;
    }
  };

  return (
    <section className="container">
      Autocomplete View
      <InputForm handleChange={handleChange} inputRef={inputRef} />
      {suggestions && <Suggestion suggestions={suggestions} />}
    </section>
  );
};
