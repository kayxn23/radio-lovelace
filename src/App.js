import React, { Component } from 'react';
import './App.css';

import RadioSet from './components/RadioSet';

import songData from './data/tracks.json';

songData.forEach((song, i) => {
  song.id = i;
});
console.log('printing songData',songData);

class App extends Component {


  render() {
    // const songData = this.state.songData;

    return (
      <div className="App">
        <header>
          <h1 className="page-header--title">Radio Lovelace</h1>
        </header>
        <main className="main">
          <RadioSet tracks={songData} />
        </main>
      </div>
    );
  }
}

export default App;
