import React, { useState } from "react";
import axios from "axios";

const AxiosFormPost = () => {
  const [name, setName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [obj, setObj] = useState({
    name: "",
    fatherName: "",
  });
  console.log(obj)
  axios.post('https://api.restful-api.dev/objects',obj)
  .then(function (response) {
    console.log(response);
  })
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
        <button onClick={()=>{setObj({name:name,fatherName:fatherName})}}>Submit</button>
      </form>
    </div>
  );
};

export default AxiosFormPost;
