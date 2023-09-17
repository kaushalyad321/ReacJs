import React, { createContext } from "react";
import { useState } from "react";
import Theme from "./Theme";
export const Context = createContext();
const ThemeSwitcher = () => {
  //white->black
  //blue->green
  //yellow->yellow
  //orange->pink
  const [obj, setObj] = useState({
    col1: "white",
    col2: "blue",
    col3: "yellow",
    col4: "orange",
  });

  const darkTheme = () => {
    setObj({
      col1: "black",
      col2: "green",
      col3: "yellow",
      col4: "pink",
    });
  };
  const clearTheme = () => {
    setObj({
      col1: "white",
      col2: "blue",
      col3: "yellow",
      col4: "orange",
    });
  };

  return (
    <div>
      <Context.Provider value={obj}>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <button
            style={{ width: "180px", height: "60px" }}
            onClick={darkTheme}
          >
            Dark Theme
          </button>
          <button
            style={{ width: "180px", height: "60px" }}
            onClick={clearTheme}
          >
            Clear Theme
          </button>
        </div>
        <Theme/>
      </Context.Provider>
    </div>
  );
};

export default ThemeSwitcher;
