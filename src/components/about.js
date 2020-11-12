import React from "react";

import '../css/app.css';
import '../css/index.css';

export default class About extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const loggedIn = this.state.loggedIn
    return (
      <div class="content">
        <div class="title">about</div>

        <div class="body-text">
          Moody Music is a web app that uses color to generate a personalized playlist based on your Spotify listening history.<br/><br/>
          Created by <a href="https://alicemliu.github.io">Alice Liu</a>. The source code can be found <a href="https://github.com/alicemliu/moody-music">here</a>.
        </div>
        
        <div class="subtitle">technology</div>
        <div class="body-text">
          Moody Music is build with <a href="https://create-react-app.dev/">create-react-app</a> and <a href="https://developer.spotify.com/documentation/web-api/">Spotify's Web API</a>. It runs completely client-side and is deployed on Heroku.<br/><br/>
          Although I used Spotify's API, I'm not affiliated with Spotify.
        </div>

        <div class="subtitle">privacy</div>
        <div class="body-text">
          Spotify authorization is handled using <a href="https://developer.spotify.com/documentation/general/guides/authorization-guide/#implicit-grant-flow">implicit grant flow</a>, meaning that all account authorization happens in your browser and no account data is being stored by Moody Music.
          Because of this, tokens expire after an hour, which is why you might be promoted to log in again after periods of inactivity.
        </div>

        <div class="icons">
          <a href="https://www.linkedin.com/in/alicemliu/"><i class="fa fa-linkedin-square"></i></a>
          <a href="https://www.github.com/alicemliu/"><i class="fa fa-github"></i></a>
          <a href="https://twitter.com/alicemliu"><i class="fa fa-twitter-square"></i></a>
        </div>
      </div>
    );
  }
}