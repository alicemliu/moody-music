import React from "react";
import { useHistory, Link } from "react-router-dom";

// import { isLogin } from './utils';

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)
    this.state = {
      token: this.props.location.state.token,
      artists: null,
      
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
      console.log(response)
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
      console.log("hell")
      console.log(data)
      let items = []
      data.items.map(function(artist) {
        // let item = $('<li>' + artist.name + '</li>');
        // item.appendTo($('#top-artists'));
        items.push(artist.name)
      });
      this.setState(state => ({
        artists: items
      }));
    })
    .catch(error => {
      console.log(error);
      window.history.push("/error");
    });
  }

  render() {
    console.log(this.state.artists)
    return (
      <div>
        {this.state.artists}
        <Link to={{
            pathname: '/playlist',
            state: { token: this.state.token }
          }}>
            <button>continue</button>
          </Link> 
      </div>
    )
  }
}