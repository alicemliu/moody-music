import React from "react";
import { Link } from "react-router-dom";
import queryString from 'query-string';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: "",
      loggedIn: false,
      message: "Log in with Spotify to get started!"
    };

    // This binding is necessary to make `this` work in the callback
  }

  componentDidMount() {
    // check for query params

    let params = queryString.parse(window.location.hash);
    let token = params.access_token
    console.log(token)

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
    console.log(this.state)
  }

  render() {
    const loggedIn = this.state.loggedIn
    return (
      <div>
        welcome 2 moody music
        { loggedIn
          ? <p>logged in</p>
          :
          <Link to="/login">
            <button>Login with Spotify</button>
          </Link>
        }
      </div>
    );
  }
}