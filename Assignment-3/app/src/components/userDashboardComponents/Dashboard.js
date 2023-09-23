import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Profile from "./Profile";
import History from "./History";
import Setting from "./Setting" ;
const Dashboard = () => {
  return (
    <>
      <div>DASHBOARD</div>
      <nav>
        <ul>
          <li>
            <NavLink to="Profile">PROFILE</NavLink>
          </li>
          <li>
            <NavLink to="History">History</NavLink>
          </li>
          <li>
            <NavLink to="Setting">SETTING</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
      
        <Route path='Profile' element={<Profile />} />
        <Route path='History' element={<History />} />
        <Route path='Setting' element={<Setting />} />
      </Routes >
    </>
  );
};

export default Dashboard;
