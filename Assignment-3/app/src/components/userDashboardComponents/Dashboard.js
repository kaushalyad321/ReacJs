import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

const Dashboard = () => {
  return (
    <>
      <div style={{marginTop:'50px'}}>
        <NavLink to='/'></NavLink>
        <NavLink to="/Dashboard/score" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow'}}>Score Card</NavLink>
        <NavLink to="/Dashboard/recentactivities" style={{width:'150px',fontSize:'30px',backgroundColor:'ButtonShadow',marginLeft:'20px'}}>Recent Activities</NavLink>
      </div>
    </>
  );
};

export default Dashboard;
