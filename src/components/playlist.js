import React from "react";

export default class Playlist extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.location.state)
    this.state = {
      token: this.props.location.state.token,
      moodOption: this.props.location.state.moodOption,
      artists: [],
      hex: this.props.location.state.hex,
      hsl: this.props.location.state.hsl,
      rgb: this.props.location.state.rgb
    };
    // This binding is necessary to make `this` work in the callback
    this.getTopArtists = this.getTopArtists.bind(this);
    this.getUser = this.getUser.bind(this);
    this.getPlaylist = this.getPlaylist.bind(this);
  }

  componentDidMount() {
    this.getUser();
    // const artists = await this.getTopArtists();
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
    .catch(error => console.log(error)); // eslint-disable-line no-console
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
      console.log(data.id)
    })
    .catch(error => console.log(error)); // eslint-disable-line no-console
  }

  getPlaylist() {
    const recommendations_api = "https://api.spotify.com/v1/recommendations?limit=20&seed_artists=" + this.state.artistQuery
    const create_playlist_api = "https://api.spotify.com/v1/users/" + this.state.userId + "/playlists"
    const add_tracks_api = "https://api.spotify.com/v1/playlists/{playlist_id}/tracks/"

    let energy = this.state.hsl.s
    let valence = this.state.rgb.g / 225

    console.log(energy)
    console.log(valence)

    fetch(recommendations_api + "&target_energy=" + energy + "&target_valence=" + valence, { 
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ' + this.state.token
      }
    })
    .then((response) => {
      console.log(response);
      if (!response.ok) throw Error(response);
      return response.json();
    })
    .then((data) => {
      let songs = ''
      data.tracks.map(function(song) {
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
          "description": "New playlist description",
          "public": false
        })
        // body: "{\"name\":\"New Playlist\",\"description\":\"New playlist description\",\"public\":false}"
      })
      .then((response) => {
        console.log(response);
        if (!response.ok) throw Error(response);
        return response.json();
      })
      .then((data) => {
        this.setState({
          playlistURI: data.external_urls.spotify
        });
        return data.id
      })
      .then((playlistId) => {
        console.log(encodeURI("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks?uris=" + this.state.songs))
        fetch("https://api.spotify.com/v1/playlists/" + playlistId + "/tracks?uris=" + this.state.songs, {
          method: 'POST',
          headers: {
            'Authorization': 'Bearer ' + this.state.token
          }
        })
        .then((response) => {
          console.log(response);
          if (!response.ok) throw Error(response);
        })
        .catch(error => console.log(error));
      })
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  }

  render() {
    return (
      <div>
          <button class='round_btn' onClick={this.getPlaylist}>get playlist</button>
          {this.state.playlistURI}
      </div>
    )
  }
}