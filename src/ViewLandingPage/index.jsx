import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { LogOut } from "./LogOut";
import { ExcelTable } from "./ExcelTable";
import { ExcelFileInput } from "./ExcelFileInput";
import { FilterTable } from "./FilterTable";
import { ExcelRenderer } from "react-excel-renderer";
import { getOrganizationInfo } from "./../getOrganization";
import { ExportCSV } from "./ExportCSV";
import { ErrorCard } from "./../ErrorCard";
import ErrorBoundary from "./../ErrorBoundary";

export const ViewLandingPage = () => {
  const [tableData, setTableData] = useState(null);
  const [missingData, setMissingData] = useState(null);
  const [organizationIds, setOrganizationIds] = useState(null);

  useEffect(() => {
    let excelData = localStorage.getItem("excelData");
    if (!excelData === null) {
      setTableData(excelData);
    }

    return () => {
      setTableData(null);
      if (missingData) {
        throw new Error(missingData);
      }
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
        setMissingData(orgsObj.map((obj) => obj.missingInfo));

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

  return (
    <main className="container">
      <div className="container__btn">
        <LogOut />
        <ErrorBoundary>
          <ExportCSV tableData={tableData} tableheadings={tableheadings} />
        </ErrorBoundary>
      </div>
      <h2>LAST OPP EXCEL FIL</h2>
      <ExcelFileInput onExelFileChanged={onExelFileChanged} />
      {!tableData && organizationIds ? (
        <ErrorCard error={"ERROR"} />
      ) : (
        <>
          {tableData && (
            <>
              <FilterTable />
              <ExcelTable
                data={tableData}
                tableheadings={tableheadings}
                missingText="Ikke opgitt!"
              />
            </>
          )}
        </>
      )}
    </main>
  );
};
