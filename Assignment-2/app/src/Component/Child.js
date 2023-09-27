import React from "react";
const Child = (props) => {
  return (
    <div>
      <p>{props.count}</p>
      <button onClick={props.reSet}>Reset Count</button>
    </div>
  );
};

export default Child;
