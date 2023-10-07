import React,{useState} from 'react'
const InputField = () => {
    const[inputValue,setInputValue]=useState('') ;
  return (
    <>
    <div>
    <span>Type any random string : </span><input onChange={(e)=>{setInputValue(e.target.value)}}></input>
    </div>
    <div style={{marginTop:'20px'}}>InputValue is Now :{inputValue}</div>
    </>
  )
}

export default InputField
