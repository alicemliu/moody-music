import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { spring, AnimatedSwitch } from 'react-router-transition';

import '../css/main.css';

import Login from './login';
import Home from './home';
import Mood from './mood';
import Playlist from './playlist';
import Color from './color';
import Error from './error';


// we need to map the `scale` prop we define below
// to the transform style property
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`,
  };
}

// wrap the `spring` helper to use a bouncy config
function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22,
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2,
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8),
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1),
  },
};

const Main = () => {

  return (
    <AnimatedSwitch
      atEnter={{ opacity: 0 }}
      atLeave={{ opacity: 0 }}
      atActive={{ opacity: 1 }}
      // atEnter={bounceTransition.atEnter}
      // atLeave={bounceTransition.atLeave}
      // atActive={bounceTransition.atActive}
      // mapStyles={mapStyles}
      className="switch-wrapper"
    >
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/login' component={Login}></Route>
      <Route exact path='/mood' component={Mood}></Route>
      <Route exact path='/color' component={Color}></Route>
      <Route exact path='/playlist' component={Playlist}></Route>
      <Route exact path='/error' component={Error}></Route>
    </AnimatedSwitch>
  );
}

export default Main;