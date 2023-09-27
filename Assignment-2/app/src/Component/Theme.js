import React ,{useContext} from 'react'
import {Context} from './ThemeSwitcher'
const Theme = () => {
  const updatedTheme=useContext(Context)
  return (
    <div >
       <div
          className="main"
          style={{
            width: "100%",
            height: "650px",
            display: "flex",
            justifyContent: "space-between",
            alignItems:'center',
            backgroundColor: updatedTheme["col1"],
            marginTop: "20px",
          }}
        >
          <div
            className="child 1"
            style={{ backgroundColor: updatedTheme["col2"] }}
          ></div>
          <div
            className="child 2"
            style={{ backgroundColor: updatedTheme["col3"] }}
          ></div>
          <div
            className="child 3"
            style={{ backgroundColor: updatedTheme["col4"] }}
          ></div>
        </div>
    </div>
  )
}

export default Theme
