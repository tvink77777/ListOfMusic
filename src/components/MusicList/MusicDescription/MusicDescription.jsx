import React, { Component } from "react";
import moment from "moment";
import PropTypes from "prop-types";
import "./MusicDescription.css";

class MusicDescription extends Component {
  render() {
    const { description } = this.props;
    return (
      <div>
        <div className="col-sm-12 col-sm-offset-2">
          <h3>
            {description.artistName} - {description.trackName} <i className="fa fa-music" />
          </h3>
        </div>
        <div className="col-sm-4 col-sm-offset-2">
          <b>Collection:</b> {description.collectionName}
          <br />
          <b>Treck Count:</b> {description.trackCount}
          <br />
          <b>Price:</b> {description.collectionPrice} {description.currency}
        </div>
        <div className="col-sm-6">
          <b>Track duration:</b> {moment(description.trackTimeMillis).format("mm:ss")} min <br />
          <b>Track Price:</b> {description.collectionPrice} {description.currency}
        </div>
      </div>
    );
  }
}

MusicDescription.propTypes = {
  description: PropTypes.object.isRequired
};

export default MusicDescription;
