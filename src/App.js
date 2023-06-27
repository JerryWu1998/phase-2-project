// App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (dataUsername, dataPassword, dataHouse, dataWand) => {
    // Verify username and password here
    const userData = {
      username: dataUsername,
      password: dataPassword,
      house: dataHouse,
      wand: dataWand
    };
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <Router>
      <Switch>
        <Route path="/login">
          {user ? (
            <Redirect to={`/profile/${user.username}`} />
          ) : (
            <Login onLogin={handleLogin} />
          )}
        </Route>
        <Route path="/profile/:username">
          {user ? (
            <Profile user={user} onLogout={handleLogout} />
          ) : (
            <Redirect to="/login" />
          )}
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
