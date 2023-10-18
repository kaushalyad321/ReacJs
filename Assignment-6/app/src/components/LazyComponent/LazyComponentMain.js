import React, { lazy, Suspense } from "react";
import { Route, Routes, Link } from "react-router-dom";

const Setting = lazy(() => import("../Setting"));
const History = lazy(() => import("../History"));
const Profile = lazy(() => import("../Profile"));

const LazyComponentMain = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/history">History</Link>
          </li>
          <li>
            <Link to="/setting">Setting</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/history" element={<History />} />
          <Route path="/setting" element={<Setting />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default LazyComponentMain;
