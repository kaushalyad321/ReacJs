import { useState } from "react";

function Counter() {
     const[val,setVal]=useState(0) ;
  return (
    <>
      <p> current value is : {val}</p>
      <button onClick={() => setVal(val + 1)}>Increment</button>
      <button onClick={() => setVal(val - 1)}>Decrement</button>
    </>
  );
}

export default Counter;
