import React, { useState } from "react";
import axios from "axios";

const AxiosFormPost = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const[check,setCheck] =useState('') ;
  const [obj, setObj] = useState({
    name: "",
    fatherName: "",
  });
  const sendData=()=>{
  axios.post('https://rapidapi.com/learn/api/rest',obj,{timeout:2000})
  .then(function (response) {
    setCheck('your data successfully submitted') ;
    console.log('success')
  })}
  return (
    <div>
      <form>
        <div>
          <label>Enter the username:</label>
          <input
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></input>
        </div>
        <div>
          <label>Enter the Password:</label>
          <input
            onChange={(e) => {
              setFatherName(e.target.value);
            }}
          ></input>
        </div>
        <button onClick={()=>{setObj({name:name,fatherName:fatherName});sendData()}}>Submit</button>
      </form>
      {check}
    </div>
  );
};

export default AxiosFormPost;
