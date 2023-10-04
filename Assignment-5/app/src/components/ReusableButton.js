import React, { useState, useEffect } from "react";

const ReusableButton = (props) => {
  const [style, setStyle] = useState();
  useEffect(() => {
    if (props.name === "primary") {
      setStyle({
        color: "white",
        backgroundColor: "black",
      });
    }

    if (props.name === "secondry") {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
    }

    if (props.name === "danger") {
      setStyle({
        color: "red",
        backgroundColor: "white",
      });
    }
  },[]);
  return (
    <div>
      <button style={style}>Button</button>
    </div>
  );
};

export default ReusableButton;
