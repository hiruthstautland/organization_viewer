import React from "react";
import PropTypes from 'prop-types';

export const ExcelFileInput = ({ onExelFileChanged }) => {
  return (
    <label>
      <input
        name="input-excel-sheet"
        type="file"
        className="btn"
        onChange={(e) => onExelFileChanged(e)}
      />
    </label>
  );
};

ExcelFileInput.propTypes = {
  onExelFileChanged: PropTypes.func,
}