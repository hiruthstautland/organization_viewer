import React from "react";
import "./style";

export const ExcelTable = ({ data, tableheadings }) => (
  <table className="outtable">
    <tbody>
      <tr className="outtable__row-headers">
        {tableheadings.map((heading, i) => (
          <th key={i}>{heading}</th>
        ))}
      </tr>
      {data.map((r, i) => (
        <tr className="outtable__row" key={i}>
          <td key={i}>{i + 1}</td>
          {r.map((c, j) => (
            <td key={j + c}>{c ? c : "Ikke registrert"}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
