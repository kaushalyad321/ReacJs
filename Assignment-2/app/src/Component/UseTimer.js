import React, { useState } from "react";

const UseTimer = ({ timeValue }) => {
  const [updatedTimeValue, setUpdatedTimeValue] = useState(timeValue);
  const [continueOrNot, setContinueOrNot] = useState(false);
  const updateTimer = () => {
    if (continueOrNot === true && updatedTimeValue > 0) {
      setTimeout(() => {
        setUpdatedTimeValue(updatedTimeValue - 1);
      }, 1000);
    }
  };
  updateTimer();
  return (
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
            setUpdatedTimeValue(timeValue);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseTimer;
