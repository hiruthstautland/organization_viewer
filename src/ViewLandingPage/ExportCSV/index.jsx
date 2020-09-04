import React from "react";
import PropTypes from "prop-types";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { getOrganizationInfo } from "./../../getOrganization";

export const ExportCSV = ({ tableData }) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
  const fileExtension = ".xlsx";

  const exportToCSV = async () => {
    let d = new Date();
    let nowDate = d.toUTCString();
    let fileName = `Organisasjons oversikt datert: ${nowDate}`;
    let csvDataArr = tableData;
    jsonToSheet(csvDataArr, fileName);
  };

  const jsonToSheet = (csvData, fileName) => {
    const ws = XLSX.utils.json_to_sheet(csvData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };

  return (
    <button className="btn" onClick={() => exportToCSV()}>
      Export
    </button>
  );
};

ExportCSV.propTypes = {
  organizationIds: PropTypes.arrayOf(PropTypes.array),
};
