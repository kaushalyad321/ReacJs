import React, {useState,createContext}from "react";
import Child from "./Child";
export const contextValue = createContext() ;
const Parent = () => {

    const[username,setUsername]=useState('') ;
    const[password,setPassword]=useState('') ;
    

  return (
    <>
      <contextValue.Provider value={{username:username,password:password}}>

      <div>
        <div style={{marginTop:'30px'}}>
        <span>Enter Username: </span>
        <input placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
        </div>
      </div>
      <div style={{marginTop:'20px'}}>
        <span>Enter Password:</span>
        <input placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
      </div>
      <Child />

      </contextValue.Provider>

    </>
  );
};

export default Parent;

