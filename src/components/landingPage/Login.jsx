import React, { useState } from 'react';

const Login = login => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = ({ target: { value } }) => setUsername(value);
  const handlePasswordChange = ({ target: { value } }) => setPassword(value);

  const handleLoginClick = () => login(username, password);

  return (
    <>
      <label>
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>

      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>

      <button onClick={handleLoginClick}>
        Login
      </button>
    </>
  );
};

export default Login;
