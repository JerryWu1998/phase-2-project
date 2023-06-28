import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [loginUsername, setLoginUsername] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [signupUsername, setSignupUsername] = useState('');
  const [signupPassword, setSignupPassword] = useState('');
  const [error, setError] = useState('');
  const [isSignupMode, setIsSignupMode] = useState(true); // State variable for signup mode

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

  const handleModeToggle = () => {
    setIsSignupMode(!isSignupMode);
    setError('');
  };

  // Login function
  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3000/users');
      if (response.ok) {
        const data = await response.json();
        const user = data.find((user) =>
          user.username === loginUsername && user.password === loginPassword
        );
        if (user) {
          onLogin(user.username, user.password, user.house, user.wand, user.comments, user.id);
        } else {
          setError('Invalid username or password');
        }
      }
    } catch (error) {
      setError('Error occurred during login');
    }
  };

  // To get all existing usernames
  const fetchUsernames = async () => {
    try {
      const response = await fetch('http://localhost:3000/users');
      if (response.ok) {
        const data = await response.json();
        const existingUsernames = data.map((user) => user.username);
        return existingUsernames;
      } else {
        throw new Error('Error retrieving usernames');
      }
    } catch (error) {
      throw new Error('Error retrieving usernames');
    }
  };

  // Sign up funciton
  const handleSignup = async (event) => {
    event.preventDefault();
    const existingUsernames = await fetchUsernames();

    if (existingUsernames.includes(signupUsername)) {
      setError('Username already taken');
    } else {
      try {
        const response = await fetch('http://localhost:3000/users', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: signupUsername,
            password: signupPassword,
            house: "",
            wand: [],
            comments: []
          }),
        });

        if (response.ok) {
          setError('')
          window.alert("Sign Up successfully!")
          setSignupUsername('')
          setSignupPassword('')
        }
      } catch (error) {
        setError('Error occurred during signup');
      }
    }
  };

  return (
    <div id='loginJS'>
      {isSignupMode ? ( // Conditionally render based on the mode state variable
        <div>
          <h1>Sign Up</h1>
          <form onSubmit={handleSignup} className='form'>
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
          <p>Already have an account? Log in{' '}
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleModeToggle}>
              here
            </span>
          </p>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          {error && <p>{error}</p>}
          <form onSubmit={handleLogin} className='form'>
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
          <p>New user? Sign Up{' '}
            <span style={{ textDecoration: 'underline', cursor: 'pointer' }} onClick={handleModeToggle}>
              here
            </span>
          </p>
        </div>
      )}
    </div>
  );
};

export default Login;