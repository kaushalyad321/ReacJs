import React from "react";
import "./App.css";
import AssignmentFour from "./Components";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <AssignmentFour />
      </BrowserRouter>
    </div>
  );
};

export default App;
