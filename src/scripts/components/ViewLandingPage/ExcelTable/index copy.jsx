import React, { useState } from "react";
import { ExcelRenderer } from "react-excel-renderer";
// import { ExcelRenderer, OutTable } from "react-excel-renderer";
import { getOrganizationInfo } from "../../../utils/getOrganization";
import { ErrorCard } from "../ErrorCard";

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
  console.log("orgInfo ", orgInfo);
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
        <OutTable
          orgInfo={orgInfo}
          // data={rows}
          // columns={cols}
          // tableClassName="ExcelTable2020"
          // tableHeaderRowClass="heading"
        />
      )}
    </div>
  );
};

export const OutTable = (props) => {
  console.log(props.orgInfo);
  return (
    <div className={props.className}>
      <table className={props.tableClassName}>
        <tbody>
          <tr>
            {props.withZeroColumn && !props.withoutRowNum && (
              <th className={props.tableHeaderRowClass || ""}></th>
            )}
            {/* {props.columns.map((c) => (
              <th
                key={c.key}
                className={c.key === -1 ? props.tableHeaderRowClass : ""}
              >
                {c.key === -1 ? "" : c.name}
              </th>
            ))} */}
          </tr>
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
    </div>
  );
};
