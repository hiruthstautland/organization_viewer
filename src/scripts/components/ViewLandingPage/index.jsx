import React, { useState } from "react";
import { LogOut } from "./LogOut";
import { ExcelTable } from "./ExcelTable";
import { ExcelFileInput } from "./ExcelFileInput";
import { ExcelRenderer } from "react-excel-renderer";
import { getOrganizationInfo } from "./../../utils/getOrganization";
import { ExportCSV } from "./ExportCSV";
import { ErrorCard } from "./ErrorCard";

export const ViewLandingPage = () => {
  const [orgInfo, setOrgInfo] = useState(null);
  const [orgObj, setOrgObj] = useState(null);
  const [appError, setAppError] = useState(null);
  const [rows, setRows] = useState(null);

  const changeHandler = (e) => {
    let fileObj = e.target.files[0];
    ExcelRenderer(fileObj, async (err, resp) => {
      if (err) {
        console.log(err);
      } else {
        let orgArr = await getOrganizationInfo(resp.rows);
        setRows(resp.rows);
        //TODO: remove next line, just for test
        // let orgObj = await getOrganizationInfo([12333]);
        
        let { errMsg, errValidation } = orgArr[0];
        if (errMsg) {
          setAppError({ errMsg, errValidation });
        }
        setOrgInfo(orgArr);
      }
    });
  };

  return (
    <main className="container">
      <div className="container__btn">
        <LogOut />
        <ExportCSV data={orgObj} rows={rows} />
      </div>
      <h3>Last opp excel fil</h3>
      <ExcelFileInput changeHandler={changeHandler} />
      {appError ? (
        <ErrorCard error={appError} />
      ) : (
        <>{orgInfo && <ExcelTable data={orgInfo} />}</>
      )}
    </main>
  );
};
