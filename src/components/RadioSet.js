import React from 'react';
import "./styles/RadioSet.css";

import Playlist from './Playlist';

/* props is the song data*/
const RadioSet = (props) => {
  console.log(`Radio set for ${props.tracks.length} tracks`);
  const playlists = {
    morningTracks: props.tracks.slice(0, props.tracks.length / 2),
    eveningTracks: props.tracks.slice(props.tracks.length / 2, props.tracks.length)
  };
  console.log("printing playlists.morningTracks",playlists.morningTracks);
  /*playlists.morningTracks [{title: xx, artist: xx ....}, {title: xx, artist: xx ....}]*/

  /* const playlists = this.state.playlists; */

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
};

export default RadioSet;
