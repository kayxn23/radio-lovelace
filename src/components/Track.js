import React from 'react'
import PropTypes from 'prop-types'

import "./styles/Track.css";

// Here we use destructuring to extract the props into separate variables
// See https://wesbos.com/destructuring-objects/

//if a button lives inside a nested component how does it propogate up to
//where the data lives in playlist->radioset?

class Track extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      favorite: false,
    }
  }

  checkedAsFave = () => {
    this.setState({
      favorite: !this.state.favorite
    })
  }

  moveTrackToTop = () => {
    this.props.moveChildTrackToTop(this.props.title)
  }

  //move to other playlist func
  moveToOtherPlaylist = () => {
    this.props.moveChildTrackToOtherPlaylist(this.props.title)
  }



  render() {

    return(
    <li className="track">
      <img className="track--albumart" alt={`album art for ${this.props.title}`} src={this.props.albumart} />
      <h3 className="track--title">{this.props.title}</h3>
      <input
        type="checkbox"
        className="track--favorite"
        checked={!this.state.favorite}
        onChange={ this.checkedAsFave }
      />
      <p className="track--artist">{this.props.artist}</p>
      <p className="track--playtime">{this.props.playtime}</p>
      <button
        className="track--control track--to-top"
        onClick={ this.moveTrackToTop }
        >
        <span role="img" aria-label="send to top">🔝</span>
      </button>
      <button
        className="track--control track--switch"
        onClick={ this.moveToOtherPlaylist }

        >
        <span role="img" aria-label="switch lists">↔</span>
      </button>
    </li>
  );


  }

};

Track.propTypes = {
  title: PropTypes.string,
  artist: PropTypes.string,
  playtime: PropTypes.string,
  albumart: PropTypes.string,
  moveChildTrackToTop: PropTypes.func,
  moveChildTrackToOtherPlaylist: PropTypes.func
}








export default Track;
