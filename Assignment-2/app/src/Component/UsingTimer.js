import React from "react";
import UseTimer from "./UseTimer";

const UsingTimer = () => {
  const [updatedTimeValue, continueOrNot,setUpdatedTimeValue,setContinueOrNot] = UseTimer(100, false);

  return (
    <>
    <div>
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "40px" }}
      >
        CLOCK TIMER
      </div>
      <div
        style={{
          fontSize: "30px",
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        {updatedTimeValue}
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <button
          style={{ width: "70px", height: "35px" }}
          onClick={() => {
            setContinueOrNot(true);
          }}
        >
          Start
        </button>
        <button
          style={{ width: "70px", height: "35px" }}
          onClick={() => {
            setContinueOrNot(false);
          }}
        >
          Stop
        </button>
        <button
          style={{ width: "70px", height: "35px" }}
          onClick={() => {
            setUpdatedTimeValue(100);
          }}
        >
          Reset
        </button>
      </div>
    </div>
    </>
  )
};

export default UsingTimer;
