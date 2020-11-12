import React from "react";
import { Link } from "react-router-dom";
import { ChromePicker } from 'react-color';

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    let token = ''
    if (typeof this.props.location.state === 'undefined') {
      this.props.history.push("/error");
    }
    else {
      token = this.props.location.state.token;
    }
    this.state = {
      token: token,
      // moodOption: this.props.location.state.moodOption,
      hex: '#ffffff',
      hsl: { h: 0, s: 0, l: 1 },
      rgb: { r: 0, g: 0, b: 0 },
      isSelected: false
    };

    this.getTopArtists = this.getTopArtists.bind(this);
    this.getUser = this.getUser.bind(this);
  }

  componentDidMount() {
    this.getUser();
    this.getTopArtists();
  }

  getTopArtists() {
    const api_url = "https://api.spotify.com/v1/me/top/artists?limit=5"

    fetch(api_url, { 
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.state.token
      }
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      let items = []
      let query = ''
      data.items.map(function(artist) {
        items.push(artist.name);
        query = query + artist.id + ',';
      });
      this.setState(state => ({
        artists: items,
        artistQuery: query
      }));
    })
    .catch(error => {
      console.log(error);
      this.props.history.push("/error");
    });
  }

  getUser() {
    const api_url = "https://api.spotify.com/v1/me"

    fetch(api_url, { 
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.state.token
      }
    })
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      this.setState(state => ({
        userId: data.id
      }));
    })
    .catch(error => {
      console.log(error);
      this.props.history.push("/error");
    });
  }

  handleChangeComplete = (color) => {
    this.setState({ 
      hex: color.hex,
      hsl: color.hsl,
      rgb: color.rgb,
      isSelected: true
    });
  };

  render() {
    return (
      <div class='content'>
          <div class='title'>what color are you feeling?</div>
          The color you pick affects the mood of the generated playlist, along with your listening history.<br/><br/><br/>


          <ChromePicker color={ this.state.hex }
            onChange={ this.handleChangeComplete }
            disableAlpha = { true }
          />
          
          <Link to={{
            pathname: '/playlist',
            state: { 
              token: this.state.token,
              hex: this.state.hex,
              hsl: this.state.hsl,
              rgb: this.state.rgb,
              artists: this.state.artists,
              artistQuery: this.state.artistQuery,
              userId: this.state.userId
            }
          }}>
            <button className="round_btn" disabled={!this.state.isSelected}>
              Create Playlist
            </button>
          </Link>
          {/* <button className="round_btn">
              Edit Color
          </button> */}
      </div>
    )
  }
}