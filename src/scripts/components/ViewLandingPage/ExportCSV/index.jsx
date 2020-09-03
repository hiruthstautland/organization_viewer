import React from "react";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { getOrganizationInfo } from "./../../../../utils/getOrganization";

export const ExportCSV = ({ rows }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const clickHandler = async () => {
    let d = new Date();
    let nowDate = d.toUTCString();
    let fileName = `Organisasjons oversikt datert: ${nowDate}`;
    let csvDataArr = await getOrganizationInfo(rows);
    exportToCSV(csvDataArr, fileName);
  };

  const exportToCSV = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button className="btn" onClick={() => clickHandler()}>
      Export
    </button>
  );
};
