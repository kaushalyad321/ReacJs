import React from 'react'
import UseLocalStorage from '../Component/UseLocalStorage';
const UsingLocalStorage = () => {
  
    const [count, setCount] = UseLocalStorage("count", 0);
    return (
        <div style={{  placeItems: "center" }}>
            <div style={{display:'flex',justifyContent:'center'}}>
            <h1>Created Custom useLocalStorage Hook to store and update data in local database in real time</h1>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
            <h2>Count - {count}</h2>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}>
            <span>
            <button onClick={() => setCount((prevCount) => prevCount + 1)}>
                Increment
            </button></span>
            <span>

            <button onClick={() => setCount((prevCount) => prevCount -1)}>
                Decrement
            </button>
            </span>
            </div>
        </div>
    );

}

export default UsingLocalStorage
