import React from 'react'
import { useNavigate } from "react-router-dom";

const Setting = () => {
  const navigate = useNavigate();

  return (
    <div className='section'>
       <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginRight: "30px",
        }}>
      
        <div>
          <h1>Setting</h1>
        </div>
        <div>
          <button
            onClick={() => {
              navigate(-1);
            }}>
          
            <img style={{ width: "50px" }} src="/Icons/arrow-left-solid.svg" />
            
          </button>
        </div>
      </div>
    </div>
  )
}

export default Setting
