import React from "react";
import IroColorPicker from './iro'
import { useHistory, Link } from "react-router-dom";
import iro from '@jaames/iro';

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.location.state.token,
      moodOption: this.props.location.state.moodOption,
      colorHex: null,
      hue: null,
      saturation: null,
      value: null
    };
    console.log("hello")
    console.log(this.props.location.state)
    console.log(this.props.location.state.moodOption)
    
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
    let hex = "#fff";
    let hsl = {
      h: 0,
      s: 0,
      l: 100
    }; 
    return (
      <div>
          <IroColorPicker
            color={ '#fff' }
            onColorChange={ (color) => { 
              hex = color.hexString;
              hsl = color.hsl;
              document.body.style.backgroundColor = hex;
            } }
          />

          <Link to={{
            pathname: '/playlist',
            state: { 
              token: this.state.token,
              hsl: hsl
            }
          }}>
            <button className="btn btn-default" type="submit">
              Submit
            </button>
          </Link>
      </div>
    )
  }
}