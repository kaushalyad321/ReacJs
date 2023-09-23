import React, { useState } from "react";
import Sidebar from "../Components/Sidebar";

const SidebarNavigation = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header>
        <button onClick={toggleSidebar}>
          <img
            src="/Icons/toggle.svg"
            style={{ width: "30px", cursor: "pointer" }}
          ></img>
        </button>
      </header>
      <main></main>
      <Sidebar open={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default SidebarNavigation;
