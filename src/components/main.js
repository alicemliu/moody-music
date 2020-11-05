import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Mood from './mood';
import Playlist from './playlist';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/mood' component={Mood}></Route>
      <Route exact path='/playlist' component={Playlist}></Route>
    </Switch>
  );
}

export default Main;