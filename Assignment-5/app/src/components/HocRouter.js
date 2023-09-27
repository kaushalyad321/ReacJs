import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import ProtectedComponent from "./ProtectedComponent";

const HocRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
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
