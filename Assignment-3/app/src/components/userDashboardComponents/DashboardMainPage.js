import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import Profile from "./Profile";
import History from "./History";
import Setting from "./Setting";
import Dashboard from "./Dashboard";
import Score from "./Score";
import Email from "./Email";
import FavHero from "./FavHero";
import RecentActivities from "./Recentactivities";
import Name from "./Name";
import UpdatePic from "./UpdatePic";
import UpdateMail from "./UpdateMail";
import FavPlayer from "./FavPlayer";
function DashboardMainPage() {
  return (
    <div className="App" style={{width:'100%',height:'500px',backgroundColor:'grey'}}>
      <nav>

        <div style={{width:'100%',height:'100px',fontSize:'40px'}}>
          <NavLink to="/" >Dashboard Main Page</NavLink>
        </div>
        <div style={{display:'flex',justifyContent:'space-evenly',fontSize:'35px'}}>

      <div className="butt"><NavLink to="Dashboard">Dashboard</NavLink></div>
      <div className="butt"> <NavLink to="Profile">Profile</NavLink></div>
      <div className="butt"> <NavLink to="setting">Setting</NavLink></div>
      <div className="butt"> <NavLink to="History">History</NavLink></div>

        </div>
      </nav>
      <Routes>

        <Route path="Dashboard" element={<Dashboard />}>
            <Route path="score" element={<Score />} />
            <Route path="recentactivities" element={<RecentActivities />} />
        </Route>
        <Route path="Profile" element={<Profile />}>
           <Route path="name" element={<Name />} />
           <Route path="email" element={<Email />} />
        </Route>
        <Route path="Setting" element={<Setting />}>
           <Route path="updatepic" element={<UpdatePic />} />
           <Route path="updatemail" element={<UpdateMail />} />
        </Route>

        <Route path="History" element={<History />}>
           <Route path="favplayer" element={<FavPlayer />} />
           <Route path="favhero" element={<FavHero />} />
        </Route>
      </Routes>
    </div>
  );
}

export default DashboardMainPage;
