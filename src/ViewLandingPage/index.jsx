import React, { useState, useEffect } from "react";
import { LogOut } from "./LogOut";
import { ExcelTable } from "./ExcelTable";
import { ExcelFileInput } from "./ExcelFileInput";
import { ExcelRenderer } from "react-excel-renderer";
import { getOrganizationInfo } from "./../getOrganization";
import { ExportCSV } from "./ExportCSV";
import { ErrorCard } from "./ErrorCard";
import * as Sentry from "@sentry/react";

export const ViewLandingPage = () => {
  const [orgInfo, setOrgInfo] = useState(null);
  const [appError, setAppError] = useState(null);
  const [organizationIds, setOrganizationIds] = useState(null);

  useEffect(() => {
    let excelData = localStorage.getItem("excelData");
    if (!excelData === null) {
      setOrgInfo(excelData);
    }

    return () => {
      setOrgInfo(null);
    };
  }, []);

  const onExelFileChanged = (e) => {
    let fileObj = e.target.files[0];
    ExcelRenderer(fileObj, async (err, excelData) => {
      if (err) {
        throw new Error(`Unable to render file: ${err}`);
      } else {
        let orgArr = await getOrganizationInfo(excelData.rows);
        setOrganizationIds(excelData.rows);
        // TODO: show error UI
        // let { errMsg, errValidation } = orgArr[0];
        // if (errMsg) {
        //   setAppError({ errMsg, errValidation });
        // return
        // }
        let tableObj = orgArr.map((info) => info.customObj);
        setOrgInfo(tableObj);
        localStorage.setItem("excelData", JSON.stringify(tableObj));
      }
    });
  };

  let tableheadings = [
    "Nr",
    "Organisasjonsnummer",
    "Selskapsnavn",
    "Kommune",
    "Hjemmeside",
    "Næringskode",
    "Antall ansatte",
  ];

  return (
    <main className="container">
      <div className="container__btn">
        <LogOut />
        <Sentry.ErrorBoundary fallback={"An error has occured"}>
          <ExportCSV
            organizationIds={organizationIds}
            tableheadings={tableheadings}
          />
        </Sentry.ErrorBoundary>
      </div>
      <h3>Last opp excel fil</h3>
      <ExcelFileInput onExelFileChanged={onExelFileChanged} />
      {appError ? (
        <ErrorCard error={appError} />
      ) : (
        <>
          {orgInfo && (
            <ExcelTable data={orgInfo} tableheadings={tableheadings} />
          )}
        </>
      )}
    </main>
  );
};
