import React from "react";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    if (typeof this.props.location.state === 'undefined') {
      this.props.history.push("/error");
      this.state = {
        token: '',
        moodOption: '',
        artists: [],
        hex: '#ffffff',
        hsl: { h: 0, s: 0, l: 1 },
        rgb: { r: 0, g: 0, b: 0 },
        artistQuery: '',
        userId: ''
      };
    }
    else {
      this.state = {
        token: this.props.location.state.token,
        moodOption: this.props.location.state.moodOption,
        hex: this.props.location.state.hex,
        hsl: this.props.location.state.hsl,
        rgb: this.props.location.state.rgb,
        artists: this.props.location.state.artists,
        artistQuery: this.props.location.state.artistQuery,
        userId: this.props.location.state.userId
      };
    }
    
    this.getPlaylist = this.getPlaylist.bind(this);
  }

componentDidMount() {
    this.getPlaylist()
  }

  getPlaylist() {
    const recommendations_api = "https://api.spotify.com/v1/recommendations?limit=20&seed_artists=" + this.state.artistQuery
    const create_playlist_api = "https://api.spotify.com/v1/users/" + this.state.userId + "/playlists"

    let energy = this.state.hsl.s
    let valence = this.state.rgb.g / 225

    fetch(recommendations_api + "&target_energy=" + energy + "&target_valence=" + valence, { 
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.state.token
      }
    })
    .then((response) => {
      if (!response.ok) throw Error(response);
      return response.json();
    })
    .then((data) => {
      let songs = ''
      data.tracks.forEach(function(song) {
        songs = songs + song.uri + ','
      });
      this.setState({
        songs: songs
      });
      return songs
    })
    .then((songs) => {
      fetch(create_playlist_api, {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer ' + this.state.token
        },
        body: JSON.stringify({
          "name": this.state.hex,
          "description": "Playlist created by Moody Music.",
          "public": false
        })
      })
      .then((response) => {
        if (!response.ok) throw Error(response);
        return response.json();
      })
      .then((data) => {
        this.setState({
          playlistURI: data.external_urls.spotify,
          playlistId: data.id
        });
        return data.id
      })
      .then((playlistId) => {
        fetch("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks?uris=" + this.state.songs, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + this.state.token
          }
        })
        .then((response) => {
          if (!response.ok) throw Error(response);
        })
        .catch(error => {
          console.log(error);
          this.props.history.push("/error");
        });
      })
      .catch(error => {
        console.log(error);
        this.props.history.push("/error");
      });
    })
    .catch(error => {
      console.log(error);
      this.props.history.push("/error");
    });
  }

  render() {
    let embedURI = "https://open.spotify.com/embed/playlist/" + this.state.playlistId;
    return (
      <div className="content">
        <div className='title'>you're feeling: </div>
        <div className='title-no-color' style={{color: this.state.hex}}>{this.state.hex}</div>
        <div>
          <iframe src={embedURI} id="embed" title="Embeded Spotify Playlist" height="380" frameBorder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        </div>
        <a href={this.state.playlistURI} className='round_btn'>Open in Spotify</a>
      </div>
    )
  }
}