import React from "react";
import { LogoutButton } from "./LogoutButton";
import { ExcelTable } from "./ExcelTable";
import { ExportCSV } from "./ExportCSV";

export const ViewLandingPage = () => (
  <main className="container">
    <div className="container__btn">
      <LogoutButton />
      <ExportCSV />
    </div>
    <ExcelTable />
  </main>
);
