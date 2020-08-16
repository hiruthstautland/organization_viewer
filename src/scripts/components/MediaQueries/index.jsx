import React, { useRef, useState } from "react";
import "./style";
import { InputForm } from "./../common/InputForm";
import { SuggestionList } from "../common/SuggestionsList";



export const AutocompleteView = () => {


 
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
