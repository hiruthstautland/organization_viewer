import React from "react";

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
