import React from "react";
import { Link, Redirect } from "react-router-dom";
import queryString from 'query-string';

import '../css/app.css';
import '../css/index.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      loggedIn: false,
      message: "Log in with Spotify to get started!"
    };
  }

  componentDidMount() {
    let params = queryString.parse(window.location.hash);
    console.log("hello")
    let token = params.access_token

    if (token) {
      console.log("if")
      this.setState(state => ({
        token: token,
        loggedIn: true,
        message: "Authentication successful."
      }));
    }
    else {
      console.log("else")
      this.setState(state => ({
        token: token,
        loggedIn: false,
        message: ""
      }));
    }
  }

  render() {
    const loggedIn = this.state.loggedIn
    return (
      <div class="content">
        <span class="title">moody music 🎶</span>
        <br/>
        <br/>
        <span class="body-text">
          A colorful, personalized playlist generator.<br/>
        </span>

        { loggedIn
          ?
          <Redirect to={{
            pathname: '/color',
            state: { token: this.state.token }
          }}/>
          :
          <Link to='/login'>
            <button class="round_btn">Login with Spotify</button>
          </Link>
        }
      </div>
    );
  }
}