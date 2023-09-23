import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router if you're using React Router
import SidebarNavigation from "./SidebarNavigation";

const MuiDrawar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Router>
      <div className="App">
        <button onClick={toggleSidebar}>Toggle Sidebar</button>
        <SidebarNavigation open={sidebarOpen} onClose={toggleSidebar} />
        <main>
          {/* Routes */}
          <Routes>
            <Route exact path="/">
              {/* Home Component */}
              <h1>Home</h1>
            </Route>
            <Route path="/dashboard">
              {/* Dashboard Component */}
              <h1>Dashboard</h1>
            </Route>
            <Route path="/profile">
              {/* Profile Component */}
              <h1>Profile</h1>
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default MuiDrawar;
