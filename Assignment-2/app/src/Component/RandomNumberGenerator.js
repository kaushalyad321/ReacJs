import { useState } from "react";
function RandomNumberGenerator(){
    const[randomNumber,setRandomNumber]= useState(0) ;
    const update=()=>{
        setRandomNumber(Math.floor(Math.random()*100 + 1)) ;
    }
    return(
        <>
        <p>Generated Random Number is : { randomNumber}</p>
        <button onClick={update}>Generate Random Number</button>
        </>
    )

}
export default RandomNumberGenerator ;