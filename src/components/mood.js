import React from "react";

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.location.state.token,
      artists: null
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
      console.log(data)
      let items = []
      data.items.map(function(artist) {
        console.log(artist.name)
        // let item = $('<li>' + artist.name + '</li>');
        // item.appendTo($('#top-artists'));
        items.push(artist.name)
      });
      this.setState(state => ({
        artists: items
      }));
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console
  }

  render() {
    console.log(this.state.artists)
    return (
      <div>
        {this.state.artists}
      </div>
    )
  }
}