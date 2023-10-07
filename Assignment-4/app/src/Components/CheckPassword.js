import React, { useState ,useEffect } from "react";

const CheckPassword = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [result, setResult] = useState(false);

  useEffect(()=>{
    if(password===rePassword  && password.length>0){
      setResult(false) ;
    }

    else{
      setResult(true) ;
    }
  })
  return (
    <div>
      <label for="password">Enter Password :</label>
      <input
        type="text"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <label for="confirmpassword">Confirm Password:</label>
      <input
        type="text"
        onChange={(e) => {
          setRePassword(e.target.value);
        }}
      />
      <div>
        <button
          style={{ marginTop: "20px", marginLeft: "80px" }}
          disabled = {result}
        >
            Submit
        </button>
      </div>
     
    </div>
  );
};

export default CheckPassword;
