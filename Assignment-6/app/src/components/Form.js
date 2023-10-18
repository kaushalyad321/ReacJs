import React, { useState } from 'react';

const Form = () => {
  const [username, setUsername] = useState('username');
  const [password, setPassword] = useState('password');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      setUsername(username) ;
      setPassword(password) ;
    }
  };
  return (
    <form className='App'>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value = {password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>Submit</button>
      </div>
    </form>
  );
};

export default Form;