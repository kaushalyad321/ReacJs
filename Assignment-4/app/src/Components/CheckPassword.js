import React, { useState } from "react";

const CheckPassword = () => {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [result, setResult] = useState("");

  const check = () => {
    if (password === rePassword) {
      setResult("both password is same and updated ");
    } else {
      setResult("password is different");
    }
  };
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
          onClick={check}
        >
          Submit
        </button>
      </div>
      {result}
    </div>
  );
};

export default CheckPassword;
