import React from "react";

export const ExcelFileInput = ({ changeHandler }) => {
  return (
    <label>
      <input
        name="input-excel-sheet"
        type="file"
        className="btn"
        onChange={(e) => changeHandler(e)}
      />
    </label>
  );
};
