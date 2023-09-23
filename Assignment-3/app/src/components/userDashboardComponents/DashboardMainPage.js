import React from "react";
import { Route, Routes, Outlet } from "react-dom";
import Dashboard from "./Dashboard";
const DashboardMainPage = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </div>
  );
};

export default DashboardMainPage;
