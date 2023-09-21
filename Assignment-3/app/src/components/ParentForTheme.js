import React, { useState, createContext, useContext } from "react";
import { themeContext } from "./ChildForTheme";
const ParentForTheme = () => {
  const theme = useContext(themeContext);
  const[username,setUsername]=useState('') ;
  const[password,setPassword]=useState('') ;
  const[result,setResult]=useState('')
  const verificationCheck =()=>{
   
    if(username==='kaushalyad321' && password==="kaushalyad321@"){
        setResult(<>Welcome {username}</>)
    }

    else{
      setResult(<>Please Login </>)
    }
 }

  const updateTheme = {
    color: theme["colour"],
    backgroundColor: theme["backgroundcolour"],
  };

  return (
    <>
      <div style={updateTheme}>
        <div>
          <div style={{ marginTop: "30px" }}>
            <span>Enter Username: </span>
            <input placeholder="Username" onChange={(e)=>{setUsername(e.target.value)}}/>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <span>Enter Password:</span>
          <input placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}/>
        </div>
        <button onClick={verificationCheck}>Login</button>
     <div>
     {result}
     </div>
      </div>
    </>
  );
};

export default ParentForTheme;
