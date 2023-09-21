import React, { useState } from "react";
import AboutPage from "./AboutPage";
import { Routes,Route, NavLink } from "react-router-dom";
const FormMainPage = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  

  console.log(userName) ;
  return (
    <div>
      
        <div>
          <div>
            <label>Enter the UserName:</label>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            ></input>
          </div>
          <div>
            <label
             
            >
              Enter the Password:
            </label>
            <input  onChange={(e) => {
                setPassword(e.target.value);
              }}></input>
          </div>
        </div>

       <NavLink to='/AboutPage'> <button >Submit</button></NavLink>
        
    </div>
  );
};

export default FormMainPage;
