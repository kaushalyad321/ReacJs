import React, { useState, useEffect } from "react";

const SlideShow = () => {
  const data = [
    "./Images/1.jpg",
    "./Images/2.jpg",
    "./Images/3.jpg",
    "./Images/4.jpg",
    "./Images/5.jpg",
    "./Images/6.jpg",
    "./Images/7.jpg",
    "./Images/8.jpg",
    "./Images/9.jpg",
    "./Images/10.jpg",
  ];
  const [index, setIndex] = useState(0);
  const [check, setCheck] = useState(true);

  useEffect(() => {
    if (check === true)
      setTimeout(() => {
        index >= 9 ? setIndex(0) : setIndex(index + 1);
      }, 1000);
  });

  const update = () => {
    if (check === true){
      setCheck(false);
    } else {
      setCheck(true);
    }
  };

  return (
    <div className="main">
      <div
        className="slide"
        style={{
          width: "100%",
          height: "600px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <img src={data[index]} alt="not found" style={{ width: "450px" }}></img>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "25px",
        }}
      >
        <button style={{ width: "150px", height: "50px" }} onClick={update}>
          Restart or Stop
        </button>
      </div>
    </div>
  );
};

export default SlideShow;
