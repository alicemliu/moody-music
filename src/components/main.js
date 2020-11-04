import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Login from './login';
import Home from './home';
import Mood from './mood';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/mood' component={Mood}></Route>
    </Switch>
  );
}

export default Main;