import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

/* props is the song data*/
class RadioSet extends React.Component {
  constructor(props) {
    super(props); //not totally sure what super(props) is doing
    this.state = {
      playlists: {
        morningTracks: props.tracks.slice(0, props.tracks.length / 2),
        eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
      }
    }
  }

  render() {
    const playlists = this.state.playlists;

    return (
      <div className="radio-set">
        <section className="radio-set--playlist-container">
          <Playlist
            side="Morning"
            tracks={playlists.morningTracks}
          />
          <Playlist
            side="Evening"
            tracks={playlists.eveningTracks}
          />
        </section>
      </div>
    );

  }


  //console.log(`Radio set for ${props.tracks.length} tracks`);

  //console.log("printing playlists.morningTracks",playlists.morningTracks);
  /*playlists.morningTracks [{title: xx, artist: xx ....}, {title: xx, artist: xx ....}]*/



};

export default RadioSet;
