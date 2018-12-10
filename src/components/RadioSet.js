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

//while we're runing thru the logic we dont want prevstate to change
  moveTrackToOtherPlaylist = (track) => {
    this.setState ((prevState, currentProps) => {

      console.log("currentProps", currentProps);
      let newArrayMorning = [];
      let newEveningArray = [];
      let tmp = {};
      // .map iterates thru track array and turns it into array of track titles
      if (prevState.morningTracks.map(track2 => track2.title).includes(track)){
     // move stuff from morning to evening
     // find the index of the track we are looking for in the morning array
     tmp = prevState.morningTracks.filter(track2 => track2.title === track)[0];
     //...prevState.morningTracks] makes copy of array
     newArrayMorning = prevState.morningTracks.filter(track2 => track2.title !== track);
     // save that track in the tmp variable
     // remove from the morning array the element at that index
// create a new evening array by doing eveningArray = [tmpTrack] + prevState.eveningArray
     newEveningArray = [tmp].concat([...prevState.eveningTracks]);
    }
    else {
     tmp = prevState.eveningTracks.filter(track2 => track2.title === track)[0];
     newEveningArray = prevState.eveningTracks.filter(track2 => track2.title !== track);
     newArrayMorning = [tmp].concat([...prevState.morningTracks]);
    }
    console.log("mroning ",newArrayMorning);
    console.log("evening ",newEveningArray);

      return {
         morningTracks : newArrayMorning,
         eveningTracks : newEveningArray
      };
    });
    console.log("test is this show ing?",this.state.morningTracks);

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
