import React from "react";
import { Link,Outlet} from "react-router-dom";
const Dashboard = () => {
  return (
    <>
      <div style={{ marginTop: "50px" }}>
        
        <Link
          to="/Dashboard/score"
          style={{
            width: "150px",
            fontSize: "30px",
            backgroundColor: "ButtonShadow",
          }}
        >
          Score Card
        </Link>
        <Link
          to="/Dashboard/recentactivities"
          style={{
            width: "150px",
            fontSize: "30px",
            backgroundColor: "ButtonShadow",
            marginLeft: "20px",
          }}
        >
          Recent Activities
        </Link>

      </div>
      <Outlet />
    </>
  );
};

export default Dashboard;
