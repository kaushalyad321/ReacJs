import React,{useState} from 'react'

const Counter = () => {
  const[count,setCount]=useState(0) ;
  return (
    <div className='App'>
      <p style={{fontSize:'30px'}}>Count: {count}</p>
      <button onClick={()=>{setCount(count+1)}}>Increment</button>
      <button onClick={()=>{setCount(count-1)}}>Decrement</button>
    </div>
  )
}

export default Counter
