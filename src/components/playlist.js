import React from "react";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state)
    this.state = {
      token: this.props.location.state.token,
      moodOption: this.props.location.state.moodOption,
      colorHex: null,
    };
    
    // This binding is necessary to make `this` work in the callback
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    const api_url = "https://api.spotify.com/v1/me/top/artists"

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
      data.items.map(function(artist) {
        console.log(artist.name)
        items.push(artist.name)
      });
      this.setState(state => ({
        artists: items
      }));
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console
  }

  render() {
    return (
      <div>
          hello
          {this.state.artists}
      </div>
    )
  }
}