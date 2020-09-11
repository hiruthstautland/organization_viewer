import React from "react";
import PropTypes from "prop-types";
import "./style";

export const ExcelFileInput = ({ onExelFileChanged }) => {
  return (
    <section>
      <h2>LAST OPP EXCEL FIL</h2>
      <label>
        <input
          name="input-excel-sheet"
          type="file"
          className="file-upload-input"
          onChange={(e) => onExelFileChanged(e)}
          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
        />
      </label>
    </section>
  );
};

ExcelFileInput.propTypes = {
  onExelFileChanged: PropTypes.func,
};
