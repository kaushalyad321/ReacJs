import { useState } from "react";
function CounterWithStep(){
     const[step,setStep]=useState(1) ;
     const[val,setval] = useState(0) ;

     return (
        <>
         <p>Please tell me the step value for Each step : <input onChange={e => setStep(e.target.value)}/></p>
         <p> current value is : {val}</p>
         <button onClick={() => setval(val + parseInt(step))}>Increment</button>
         <button onClick={() => setval(val- parseInt(step))}>Decrement</button>
         </>

     ) ;

}

export default CounterWithStep;