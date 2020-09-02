import React from "react";
import "./style";

export const ExcelTable = ({ data }) => (
  <table className="outtable">
    <tbody>
      <tr className="outtable__row-headers">
        <th>Nr.</th>
        <th>Organisasjonsnummer</th>
        <th>selskapsnavn</th>
        <th>kommune</th>
        <th>hjemmeside</th>
        <th>næringskode</th>
        <th>antall ansatte</th>
      </tr>
      {data.map((r, i) => (
        <tr className="outtable__row" key={i}>
          <td key={i}>{i + 1}</td>
          {r.map((c) => (
            <td key={c.key}>{c}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);
