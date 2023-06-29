import React from 'react';
import { useHistory, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import SortingQuiz from './SortingQuiz';
import BuildWand from './BuildWand';
import VirtualGreatHall from './VirtualGreatHall';

function Profile({ user, onLogout, onUpdateHouse, onUpdateWand }) {

  const history = useHistory();
  const { path, url } = useRouteMatch();

  const handleLogout = () => {
    onLogout();
    history.push('/login');
  };

  if (!user) {
    return null;
  }


  return (
    <div>
      <nav className="navMenu">
        <Link to={`${url}`}>My Profile</Link>
        <Link to={`${url}/sorting-quiz`}>Sorting Quiz</Link>
        <Link to={`${url}/build-wand`}>Build Wand</Link>
        <Link to={`${url}/virtual-great-hall`}>Great Hall</Link>
      </nav>

      <Switch>
        <Route exact path={`${path}`}>
          <div className='profileJS'>
            <h1 >Profile</h1>
            <h2>Welcome, {user.username}!</h2>
            <p>Your House: {user.house}</p>
            {user.houseIcon && <img className='profile-image' src={`${user.houseIcon}`} alt=""></img>}
            <p>Your Wand: {user.wand}</p>
            <button onClick={handleLogout} className='login-button'>Logout</button>
          </div>
        </Route>
        <Route path={`${path}/sorting-quiz`}>
          <SortingQuiz user={user} onUpdateHouse={onUpdateHouse} />
        </Route>
        <Route path={`${path}/build-wand`}>
          <BuildWand user={user} onUpdateWand={onUpdateWand} />
        </Route>
        <Route path={`${path}/virtual-great-hall`}>
          <VirtualGreatHall user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
