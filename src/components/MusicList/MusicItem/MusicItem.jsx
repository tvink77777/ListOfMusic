import React, { Component } from "react";
import PropTypes from "prop-types";
import "./MusicItem.css";

class MusicItem extends Component {
  render() {
    const { item, index, toggle, onToggle } = this.props;

    return (
      <div className={`row ${index % 2 === 1 ? "even" : "odd"}`}>
        <div className="col-sm-2">
          <img src={item.artworkUrl100} alt="" />
        </div>

        <div className="col-sm-2">
          <b className="track">{item.artistName}</b>
        </div>

        <div className="col-sm-2">
          <b className="track">{item.trackName}</b>
        </div>

        <div className="col-sm-2">
          <b className="track">{item.collectionName}</b>
        </div>

        <div className="col-sm-2">
          <b className="track">{item.primaryGenreName}</b>
        </div>

        <div className="col-sm-2 expand-btn__wrapper center">
          <span onClick={() => onToggle(index)} className="expand-btn">
            {toggle === index ? "-" : "+"}
          </span>
        </div>
      </div>
    );
  }
}

MusicItem.propTypes = {
  item: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  toggle: PropTypes.any
};

export default MusicItem;
