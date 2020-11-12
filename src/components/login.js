import React from "react";

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {token: ""};

    // This binding is necessary to make `this` work in the callback
  }

  componentDidMount() {
    const hash = window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial, item) {
      if (item) {
        var parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
    window.location.hash = '';

    // Set token
    let _token = hash.access_token;

    const authEndpoint = 'https://accounts.spotify.com/authorize';

    // Replace with your app's client ID, redirect URI and desired scopes
    const clientId = '3c6967b4c5d84ba9bb81d27d7d2f3f2f';
    const redirectUri = 'http://localhost:3000/';
    const scopes = [
      'user-top-read',
      'playlist-modify-private',
      'playlist-modify-public'
    ];

    // If there is no token, redirect to Spotify authorization
    if (!_token) {
      window.location = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join('%20')}&response_type=token&show_dialog=true`;
    }
  }

  render() {
    return (
      <div>
        <span class="subtitle">Authorizing...</span>
      </div>
    );
  }
}