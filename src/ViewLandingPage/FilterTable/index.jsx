import React from "react";
import PropTypes from "prop-types";
import "./style";

export const FilterTable = ({ option1, option2 }) => {
  // TODO: Add icons to List
  // option 1 and 2, sent in!
  return (
    <>
      <h1> Filter Table </h1>

      <select id="mounth">
        <option value="hide" className=".select-hidden">
          -- Month --
        </option>
        <option value="january" rel="icon-temperature">
          January
        </option>
        <option value="february">February</option>
        <option value="march">March</option>
        <option value="april">April</option>
        <option value="may">May</option>
        <option value="june">June</option>
        <option value="july">July</option>
        <option value="august">August</option>
        <option value="september">September</option>
        <option value="october">October</option>
        <option value="november">November</option>
        <option value="december">December</option>
      </select>

      <select id="year">
        <option value="hide">-- Year --</option>
        <option value="2010">2010</option>
        <option value="2011">2011</option>
        <option value="2012">2012</option>
        <option value="2013">2013</option>
        <option value="2014">2014</option>
        <option value="2015">2015</option>
      </select>
    </>
  );
};

FilterTable.propTypes = {
  onExelFileChanged: PropTypes.func,
};
