import React from "react";
import { useHistory, Link } from "react-router-dom";

// import { isLogin } from './utils';

export default class Mood extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props)

    let temp = ""
    if (typeof this.props.location.state === 'undefined') {
      this.props.history.push("/error");
      return;
    }
    else {
      temp = this.props.location.state.token
    }
    // else {
    //   this.state = {
    //     token: this.props.location.state.token,
    //     artists: [],
    //     moodOption: "",
    //     isSelected: false
    //   };
    // }

    this.state = {
      token: temp,
      artists: [],
      moodOption: "",
      isSelected: false
    };

    // This binding is necessary to make `this` work in the callback
    this.getData = this.getData.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onValueChange(event) {
    this.setState({
      moodOption: event.target.value,
      isSelected: true
    });
    console.log(event.target.value)
  }

  formSubmit(event) {
    event.preventDefault();
    console.log(this.state.moodOption)
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
      //console.log(response)
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((data) => {
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
      this.props.history.push("/error");
    });
  }

  render() {

    return (
      <div>
        <form>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Male"
                checked={this.state.moodOption === "Male"}
                onChange={this.onValueChange}
              />
              Male
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Female"
                checked={this.state.moodOption === "Female"}
                onChange={this.onValueChange}
              />
              Female
            </label>
          </div>
          <div className="radio">
            <label>
              <input
                type="radio"
                value="Other"
                checked={this.state.moodOption === "Other"}
                onChange={this.onValueChange}
              />
              Other
            </label>
          </div>
          <div>
            Selected option is : {this.state.moodOption}
          </div>
          <Link to={{
            pathname: '/color',
            state: { 
              token: this.state.token,
              moodOption: this.state.moodOption
            }
          }}>
            <button disabled={!this.state.isSelected} className="btn btn-default" type="submit">
              Submit
            </button>
          </Link>
        </form>
      </div>
    )
  }
}