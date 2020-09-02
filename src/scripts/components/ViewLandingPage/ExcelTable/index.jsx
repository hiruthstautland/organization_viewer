import React, { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
// import { ExcelRenderer, OutTable } from "react-excel-renderer";
import { getOrganizationInfo } from "../../../utils/getOrganization";
import { ErrorCard } from "../ErrorCard";
import "./style";

export const ExcelTable = () => {
  const [orgInfo, setOrgInfo] = useState(null);
  const [appError, setAppError] = useState(null);

  const changeHandler = (e) => {
    let fileObj = e.target.files[0];
    ExcelRenderer(fileObj, async (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let orgObj = await getOrganizationInfo(resp.rows);
        //TODO: remove next line, just for test
        // let orgObj = await getOrganizationInfo([12333]);
        let { errMsg, errValidation } = orgObj[0];
        if (errMsg) {
          setAppError({ errMsg, errValidation });
        }
        setOrgInfo(orgObj);
      }
    });
  };
  return (
    <div>
      <h1>Last opp excel fil</h1>
      <input
        name="input-excel-sheet"
        type="file"
        className="btn"
        onChange={changeHandler}
        style={{ padding: "10px", border: "1px solid black" }}
      />
      {appError ? (
        <ErrorCard error={appError} />
      ) : (
        <>
          {orgInfo && (
            <OutTable
              data={orgInfo}
              // tableClassName="outtable"
              // tableHeaderRowClass="heading"
            />
          )}
        </>
      )}
    </div>
  );
};

export const OutTable = (data, tableClassName) => {
  console.log("orgInfo out", data);
  return (
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
        {data.data.map((r, i) => (
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
};
