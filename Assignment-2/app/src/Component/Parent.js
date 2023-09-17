import React, { useState, useCallback } from "react";
import Child from "../Component/Child";
const Parent = () => {
  const [count, setCount] = useState(0);
  const Increment = () => {
    setCount(count + 1);
  };
  const reSet = useCallback(() => {
    setCount(0);
  }, [count]);
  return (
    <div>
      <button onClick={Increment}>Increment</button>
      <Child count={count} reSet={reSet} />
    </div>
  );
};
export default Parent;
