import React from 'react';
import { Switch, Route } from 'react-router-dom';

import '../css/index.css';

import About from './about';
import Login from './login';
import Home from './home';
import Playlist from './playlist';
import Color from './color';
import Error from './error';
import PageNotFound from './pagenotfound';

const Main = () => {

  return (
    <Switch className="switch-wrapper">
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/about' component={About}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/color' component={Color}></Route>
      <Route exact path='/playlist' component={Playlist}></Route>
      <Route exact path='/error' component={Error}></Route>
      <Route component={PageNotFound}/>
    </Switch>
  );
}

export default Main;