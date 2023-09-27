import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (username && password) {
      onSubmit({ username, password });
    }
  };
  return (
    <form onSubmit={handleSubmit} className='App'>
      <div>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" name="username" value={username} onChange={handleUsernameChange} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default Form;