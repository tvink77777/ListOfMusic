import React, { Component } from "react";
import MusicItem from "./MusicItem";
import MusicDescription from "./MusicDescription";
import PropTypes from "prop-types";

class MusicList extends Component {
  constructor() {
    super();

    this.state = { toggle: null, columns: ["", "Artist", "Track", "Collection", "Ganre"] };
  }

  onToggle = index => this.setState({ toggle: this.state.toggle === index ? null : index });

  render() {
    return (
      <div className="container-fluid">
        <div className="container-fluid">
          <div className="row">
            {this.props.listOfMusic.length !== 0 &&
              this.state.columns.map((column, index) => (
                <div key={index} className="col-sm-2">
                  <b>{column}</b>
                </div>
              ))}
          </div>
        </div>

        {this.props.listOfMusic.map((item, index) => (
          <div key={index} className="music-item  container-fluid">
            <MusicItem index={index} item={item} toggle={this.state.toggle} onToggle={this.onToggle} />
            {this.state.toggle === index && <MusicDescription description={item} />}
          </div>
        ))}
      </div>
    );
  }
}

MusicList.propTypes = {
  listOfMusic: PropTypes.array.isRequired
};

export default MusicList;
