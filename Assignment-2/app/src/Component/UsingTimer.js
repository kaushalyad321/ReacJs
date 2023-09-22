import React, { useEffect, useState } from "react";
import UseTimer from "./UseTimer";
const UsingTimer = () => {
  const currentTime = UseTimer();
  const [result,setResult]=useState(currentTime.time) ;
  useEffect(()=>{
      if(currentTime.time>0)  setResult(currentTime.time) ;
      else{
        setResult(0) ;
      }
  }
,[currentTime.time])
  return (
    <div style={{marginLeft:'720px'}}>
    
     <p style={{fontSize:'50px',marginLeft:'100px'}}>{result}</p>
     <button style={{width:'100px',height:'40px'}} onClick={currentTime.start}>Start</button>
     <button style={{width:'100px',height:'40px'}} onClick={currentTime.stop}>Stop</button>
     <button style={{width:'100px',height:'40px'}}onClick={currentTime.reset}>Reset</button>

    </div>
  );
};

export default UsingTimer;
