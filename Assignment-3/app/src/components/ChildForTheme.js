import React, { createContext, useState } from "react";
import ParentForTheme from "./ParentForTheme";
export const themeContext = createContext();

const ChildForTheme = () => {
  const [color, setcolor] = useState("black");
  const [backgroundcolor, setbackgroundcolor] = useState("white");
 

  const updateThemeWhite = () => {
    setcolor("black");
    setbackgroundcolor("white");
  };

  const updateThemeBlack =()=>{
     setcolor('white') ;
     setbackgroundcolor('black') ;
  }

  return (
    <>
      <themeContext.Provider
        value={{ colour: color, backgroundcolour: backgroundcolor }}
      >
       <ParentForTheme />


      
         <div>

        <button
          style={{ backgroundColor: "black", color: "white" }}
          onClick={updateThemeBlack}
        >
          DarkTheme
        </button>
        <button
          style={{ backgroundColor: "white", color: "black" }}
          onClick={updateThemeWhite}
        >
          ClearTheme
        </button>
        </div>
      </themeContext.Provider>
    </>
  );
};

export default ChildForTheme;
