import React from "react";
import PropTypes from "prop-types";
import "./style";

export const ExcelFileInput = ({ onExelFileChanged }) => {
  return (
    <label>
      <input
        name="input-excel-sheet"
        type="file"
        className="file-upload-input"
        onChange={(e) => onExelFileChanged(e)}
        accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
      />
    </label>
  );
};

ExcelFileInput.propTypes = {
  onExelFileChanged: PropTypes.func,
};
