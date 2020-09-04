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
  const [tableData, setTableData] = useState(null);
  const [appError, setAppError] = useState(null);
  const [missingInfo, setMissingInfo] = useState(null);
  const [organizationIds, setOrganizationIds] = useState(null);

  useEffect(() => {
    let excelData = localStorage.getItem("excelData");
    if (!excelData === null) {
      setTableData(excelData);
    }

    return () => {
      setTableData(null);
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

        let orgsObj = orgArr.filter((el) => {
          if (el.customObj) {
            return el.customObj;
          }
        });
        setTableData(orgsObj.map((obj) => obj.customObj));
        setMissingInfo(orgsObj.map((obj) => obj.missingInfo));

        // console.log(tableData)

        // TODO: show error UI
        // let { errMsg, errValidation } = orgArr[0];
        // if (errMsg) {
        //   setAppError({ errMsg, errValidation });
        // return
        // }
        // let tableObj = orgArr.;
        localStorage.setItem("excelData", JSON.stringify(tableData));
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

  console.log("before render", tableData);

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
          {tableData && (
            <ExcelTable
              data={tableData}
              tableheadings={tableheadings}
              missingText="Ikke opgitt!"
            />
          )}
        </>
      )}
    </main>
  );
};
