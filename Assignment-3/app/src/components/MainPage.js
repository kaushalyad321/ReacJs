import React from "react";
import { NavLink } from "react-router-dom";
const MainPage = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/Home">Home</NavLink>
        </li>
        <li>
          <NavLink to='/About'>About</NavLink>
        </li>
        <li>
          <NavLink to='/ContactUs'>Contact Us</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default MainPage;
