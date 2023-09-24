import React, { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./Login";
import Profile from "./AboutPage";

const ProtectedRouter = () => {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    
    <Routes>
      <Route
        path="/login"
        element={
          isAuthenticated ? (
            <Navigate to="/aboutpage" />
          ) : (
            <Login setAuthenticated={setAuthenticated} />
          )
        }
      />
      <Route
        path="/aboutpage"
        element={isAuthenticated ? <Profile /> : <Navigate to="/login" />}
      />
      <Route
        path="/*"
        element={
          isAuthenticated ? (
            <Navigate to="/aboutpage" />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
    </Routes>
  );
};

export default ProtectedRouter;
