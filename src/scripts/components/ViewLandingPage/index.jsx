import React, { useState } from "react";
import { LogOut } from "./LogOut";
import { ExcelTable } from "./ExcelTable";
import { ExcelFileInput } from "./ExcelFileInput";
import { ExcelRenderer } from "react-excel-renderer";
import { getOrganizationInfo } from "./../../../utils/getOrganization";
import { ExportCSV } from "./ExportCSV";
import { ErrorCard } from "./ErrorCard";
import * as Sentry from "@sentry/react";

export const ViewLandingPage = () => {
  const [orgInfo, setOrgInfo] = useState(null);
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

        // let { errMsg, errValidation } = orgArr[0];
        // if (errMsg) {
        //   setAppError({ errMsg, errValidation });
        // }
        setOrgInfo(orgArr.map((info) => info.customObj));
      }
    });
  };

  let tableheadings = [
    "Nr",
    "Organisasjonsnummer",
    "selskapsnavn",
    "kommune",
    "hjemmeside",
    "næringskode",
    "antall ansatte",
  ];
  return (
    <main className="container">
      <div className="container__btn">
        <LogOut />
        <ExportCSV rows={rows} tableheadings={tableheadings} />
      </div>
      <h3>Last opp excel fil</h3>
      <ExcelFileInput changeHandler={changeHandler} />
      {appError ? (
        <ErrorCard error={appError} />
      ) : (
        <>
          {orgInfo && (
            <Sentry.ErrorBoundary fallback={"An error has occured"}>
              <ExcelTable data={orgInfo} tableheadings={tableheadings} />
            </Sentry.ErrorBoundary>
          )}
        </>
      )}
    </main>
  );
};
