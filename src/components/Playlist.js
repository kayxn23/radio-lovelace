import React from 'react'
import PropTypes from 'prop-types'
import './styles/Playlist.css';

import Track from './Track';

const calculatePlayTime = (tracks) => {
  let minutes = 0;
  let seconds = 0;
  tracks.forEach((track) => {
    const times = track.playtime.split(':');
    minutes += parseInt(times[0]);
    seconds += parseInt(times[1]);
  });

  minutes += Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  seconds %= 60;
  minutes %= 60;

  seconds = ("" + seconds).padStart(2, "0");
  minutes = ("" + minutes).padStart(2, "0");

  return `${hours}:${minutes}:${seconds}`;
}

/* props is a hash and we are dealting with 2
    {side: "morn", tracks: Array(43)}
    {side: "even", tracks: Array(43)}*/

class Playlist extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tracks: this.props.tracks
    }
  }

//custom sort
//if x is the thing we're putting first put it first
// if y is ... put it first
//if neither is then leave them in the same spot
//given track x and y which goes first

  moveChildTrackToOtherPlaylist = (track) => {
    console.log("this is the track?", track);
    this.props.moveToOtherPlaylistMaster(track);
  }

  moveChildTrackToTop = (first) => {
    console.log("before the sort",this.state.tracks);

//if you're created a new state based on the previous state make sure we use the current previous state
    this.setState(prevState => ({
    tracks: [...prevState.tracks].sort(function(x,y){ return x.title === first ? -1 : y.title === first ? 1 : 0; })
  }))
}

// data.sort(function(x,y){ return x == first ? -1 : y == first ? 1 : 0; });
  render() {
  const tracks = this.state.tracks;
  const trackCount = tracks.length;
  const playtime = calculatePlayTime(tracks);
  const trackElements = tracks.map((track, i) => {
    // We use "spread syntax" here to pass in all the properties of
    // the variable 'track' as props. Go look it up!
    // consts track = {track: track.title, artist: track.artist, playtime: track.playtime, albumart: track.albumart}
    return (
      <Track
        key={`${track.title}${track.artist}`}
        {...track}
        moveChildTrackToTop={this.moveChildTrackToTop}
        moveChildTrackToOtherPlaylist={this.moveChildTrackToOtherPlaylist}
      />
    );
  });

  return (
    <div className="playlist">
      <h2>{this.props.side} Playlist</h2>
      <p>
        {trackCount} tracks - {playtime}
      </p>
      <ul className="playlist--track-list">
        {trackElements}
      </ul>
    </div>
  );
}
};


Playlist.propTypes = {
  tracks: PropTypes.array,
  side: PropTypes.string,
  moveToOtherPlaylistMaster: PropTypes.func
}

export default Playlist;
