import React from "react";
import { useHistory, Link } from "react-router-dom";
import { SliderPicker, ChromePicker } from 'react-color';

export default class Color extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      token: this.props.location.state.token,
      moodOption: this.props.location.state.moodOption,
      hex: '#fff',
      hsl: { h: 0, s: 0, l: 1 },
      rgb: { r: 0, g: 0, b: 0 },
      isSelected: false
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

  handleChangeComplete = (color) => {
    this.setState({ 
      hex: color.hex,
      hsl: color.hsl,
      rgb: color.rgb,
      isSelected: true
    });
    console.log(color.rgb)
  };

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
        items.push(artist.name)
      });
      this.setState(state => ({
        artists: items
      }));
    })
    .catch(error => {
      this.props.history.push("/error");
      console.log(error);
    }); // eslint-disable-line no-console
  }

  render() {
    return (
      // <div style={{ backgroundColor: this.state.hex }}>
      <div>
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
              rgb: this.state.rgb
            }
          }}>
            <button className="round_btn" type="submit" disabled={!this.state.isSelected}>
              Submit
            </button>
          </Link>
      </div>
    )
  }
}