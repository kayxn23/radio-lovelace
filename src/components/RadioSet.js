import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

/* props is the song data*/
class RadioSet extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        morningTracks: props.tracks.slice(0, props.tracks.length / 2),
        eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
    }
  }

  moveTrackToOtherPlaylist = (track) => {
    console.log("test print track from Radioset", track );
  }

  render() {
  return (
    <div className="radio-set">
      <section className="radio-set--playlist-container">
        <Playlist
          side="Morning"
          tracks={this.state.morningTracks}
          moveToOtherPlaylistMaster={this.moveTrackToOtherPlaylist}
        />
        <Playlist
          side="Evening"
          tracks={this.state.eveningTracks}
          moveToOtherPlaylistMaster={this.moveTrackToOtherPlaylist}
        />
      </section>
    </div>
  );
};
}


export default RadioSet;
