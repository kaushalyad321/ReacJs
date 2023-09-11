import { useState } from "react";
function CounterWithState(){
     const[val,setval] = useState(0) ;
     return (
        <>
         <p> current value is : {val}</p>
         <button onClick={() => setval(val + 1)}>Increment</button>
         <button onClick={() => setval(val- 1)}>Decrement</button>
         </>

     ) ;

}

export default CounterWithState;