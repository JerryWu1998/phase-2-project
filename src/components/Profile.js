import React from 'react';
import { useHistory, Link, Route, Switch, useRouteMatch } from 'react-router-dom';
import SortingQuiz from './SortingQuiz';
import BuildWand from './BuildWand';
import VirtualGreatHall from './VirtualGreatHall';

function Profile({ user, onLogout, onUpdateHouse }) {
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
      <nav>
        <ul>
          <li>
            <Link to={`${url}`}>Profile</Link>
          </li>
          <li>
            <Link to={`${url}/sorting-quiz`}>Sorting Quiz</Link>
          </li>
          <li>
            <Link to={`${url}/build-wand`}>Build Your Wand</Link>
          </li>
          <li>
            <Link to={`${url}/virtual-great-hall`}>Virtual Great Hall</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path={`${path}`}>
          <div>
            <h1>Profile</h1>
            <h2>Welcome, {user.username}!</h2>
            <p>Your House: {user.house}</p>
            <p>Your Wand: {user.wand}</p>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </Route>
        <Route path={`${path}/sorting-quiz`}>
          <SortingQuiz user={user} onUpdateHouse={onUpdateHouse} />
        </Route>
        <Route path={`${path}/build-wand`} component={BuildWand} />
        <Route path={`${path}/virtual-great-hall`}>
          <VirtualGreatHall user={user} />
        </Route>
      </Switch>
    </div>
  );
}

export default Profile;
