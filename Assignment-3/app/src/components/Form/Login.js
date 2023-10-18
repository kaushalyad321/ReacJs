import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setAuthenticated }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "kaushalyad321" && password === "kaushalyad321@") {
      setAuthenticated(true);
      navigate("/aboutpage");
    } else {
      alert("Incorrect username or password");
    }
  };

  return (
    <div className="App">
      <h1>Login</h1>
      <div>
      <label>Enter Username :</label>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      </div>
      <div>
      <label>Enter Password : </label>
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
     </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
