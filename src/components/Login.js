import React, { useState } from 'react';

const Login = ({ onLogin, onSignup }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [error, setError] = useState('');

  const handleLoginUsernameChange = (event) => {
    setLoginUsername(event.target.value);
  };

  const handleLoginPasswordChange = (event) => {
    setLoginPassword(event.target.value);
  };

  const handleSignupUsernameChange = (event) => {
    setSignupUsername(event.target.value);
  };

  const handleSignupPasswordChange = (event) => {
    setSignupPassword(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users');
      if (response.ok) {
        const data = await response.json();
        const user = data.find(
          (user) => user.username === loginUsername && user.password === loginPassword
        );

        if (user) {
          onLogin(user.username, user.password, user.house, user.wand, user.id);
        } else {
          setError('Invalid username or password');
        }
      } else {
        setError('Error occurred during login');
      }
    } catch (error) {
      setError('Error occurred during login');
    }
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: signupUsername,
          password: signupPassword,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        onSignup(data.username, data.password, data.house, data.wand);
      } else {
        setError('Error occurred during signup');
      }
    } catch (error) {
      setError('Error occurred during signup');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={loginUsername}
          onChange={handleLoginUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={loginPassword}
          onChange={handleLoginPasswordChange}
        />
        <button type="submit">Login</button>
      </form>

      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input
          type="text"
          placeholder="Username"
          value={signupUsername}
          onChange={handleSignupUsernameChange}
        />
        <input
          type="password"
          placeholder="Password"
          value={signupPassword}
          onChange={handleSignupPasswordChange}
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default Login;
