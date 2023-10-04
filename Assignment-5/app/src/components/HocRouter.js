import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProtectedComponent from "./ProtectedComponent";

const HocRouter = () => {
  return (
    <Router>
      <nav>
        <div>
          <div>
            <Link to="/">Home</Link>
          </div>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </div>
      </nav>

      <hr />

      <Routes>
        <Route path="/" exact></Route>
        <Route path="/protected" component={ProtectedComponent} />
      </Routes>
    </Router>
  );
};

export default HocRouter;
