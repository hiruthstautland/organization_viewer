import React from "react";
import "./style";

export const ExcelTable = ({ data, tableheadings }) => (
  <table className="table">
    <tbody>
      <tr className="table__row-headers">
        {tableheadings.map((heading, i) => (
          <th key={i}>{heading}</th>
        ))}
      </tr>
      {data.map((r, i) => (
        <tr className="table__row" key={i}>
          <td
            className="table__col"
            // key={r.organisasjonsnummer.slice(1) + i}
            key={Date.now() + i}
          >
            {i + 1}
          </td>
          <td className="table__col" key={r.organisasjonsnummer}>
            {r.organisasjonsnummer}
          </td>
          <td className="table__col" key={r.navn}>
            {r.navn}
          </td>
          <td className="table__col" key={r.kommune}>
            {r.kommune}
          </td>
          <td className="table__col" key={r.navn + i}>
            {r.hjemmeside}
          </td>
          <td className="table__col" key={r.kode}>
            {r.kode}
          </td>
          <td className="table__col" key={r.organisasjonsnummer + i}>
            {r.antallAnsatte}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
