import React from "react";
import Profile from "./Profile";
import Setting from "./Setting";
import History from "./History";
import Dashboard from "./Dashboard";
import{
  Routes,
  Route,
  NavLink,
} from "react-router-dom";

const MainDashboard = () => {
  return (
    <div style={{display:'flex'}}>
      <div style={{width:'20%',height:'400px',backgroundColor:'grey'}}>
      <div className="CHILD"><NavLink to='/dashboard' style={{width:'100%',height:'100%',fontSize:'40px'}}>DASHBOARD</NavLink></div>
      <div className="CHILD"><NavLink to='/profile' style={{width:'100%',height:'100%',fontSize:'40px'}}>PROFILE</NavLink></div>
      <div className="CHILD"><NavLink to='history' style={{width:'100%',height:'100%',fontSize:'40px'}}>HISTORY</NavLink></div>
      <div className="CHILD"><NavLink to='setting' style={{width:'100%',height:'100%',fontSize:'40px'}}>SETTING</NavLink></div>
      </div>
      <div style={{width:'80%',height:'400px',backgroundColor:'orange'}}>
      <Routes>
        
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/profile" element={<Profile />} />
        <Route path="/history" element={<History />} />
        <Route path="/setting" element={<Setting />} />
      </Routes>
      </div>
    </div>
  );
};

export default MainDashboard;
