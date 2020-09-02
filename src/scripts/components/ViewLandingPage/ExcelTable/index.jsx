import React, { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
// import { ExcelRenderer, OutTable } from "react-excel-renderer";
import { getOrganizationInfo } from "../../../utils/getOrganization";
import { ErrorCard } from "../ErrorCard";
import "./style";

export const ExcelTable = () => {
  const [rows, setRows] = useState([]);
  const [cols, setCols] = useState([]);
  const [orgInfo, setOrgInfo] = useState({});
  const [appError, setAppError] = useState(null);
  // const [rows, setRows] = useState({});
  // const [cols, setCols] = useState({});

  const changeHandler = (e) => {
    let fileObj = e.target.files[0];
    // pass the fileObj as parameter
    ExcelRenderer(fileObj, async (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        // setCols(resp.cols);
        // setRows(resp.rows);
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
          {orgInfo.length && (
            <OutTable
              data={orgInfo}
              // data={rows}
              // columns={cols}
              // tableClassName="ExcelTable2020"
              // tableHeaderRowClass="heading"
            />
          )}
        </>
      )}
    </div>
  );
};

export const OutTable = (data) => {
  console.log("orgInfo out", typeof data);
  return (
    <table className="outtable">
      <tbody>
        <tr className="outtable__row-headers">
          <th>Organisasjonsnummer</th>
          <th>selskapsnavn</th>
          <th>kommune</th>
          <th>hjemmeside</th>
          <th>næringskode</th>
          <th>antall ansatte</th>
        </tr>
        {data.map((r, i) => {
          <tr key={i}>hei</tr>;
        })}
        {/* {props.data.map((r, i) => (
            <tr key={i}>
              {!props.withoutRowNum && (
                <td key={i} className={props.tableHeaderRowClass}>
                  {props.renderRowNum ? props.renderRowNum(r, i) : i}
                </td>
              )}
              {props.columns.map((c) => (
                <td key={c.key}>{r[c.key]}</td>
              ))}
            </tr>
          ))} */}
      </tbody>
    </table>
  );
};
