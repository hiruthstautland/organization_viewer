import React from "react";

export const InputForm = ({ handleChange, inputRef }) => (
  <form>
    <input
      name="input-search"
      type="text"
      placeholder="Search..."
      onChange={handleChange}
      autoComplete="off"
      ref={inputRef}
    />
    <button>Search</button>
  </form>
);
