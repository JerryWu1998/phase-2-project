// Profile.js
import React from 'react';
import { useHistory } from 'react-router-dom';

function Profile({ user, onLogout }) {
  const history = useHistory();

  const handleLogout = () => {
    onLogout();
    history.push('/login');
  };

  if (!user) {
    return null;
  }

  return (
    <div>
      <h1>Profile</h1>
      <h2>Welcome, {user.username}!</h2>
      <p>Your House: {user.house}</p>
      <p>Your Wand: {user.wand}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Profile;
