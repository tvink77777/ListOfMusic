import React, { Component } from "react";
import { debounce } from "throttle-debounce";
import PropTypes from "prop-types";
import "./Search.css";

class Search extends Component {
  render() {
    return (
      <div className="search">
        <div className="input-wrapper">
          <input
            type="text"
            className="search__input form-control"
            onChange={debounce(300, () => this.props.onSearch(this.textInput.value))}
            ref={input => {
              this.textInput = input;
            }}
          />
          <i className="fa fa-search" />
        </div>
      </div>
    );
  }
}

Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

export default Search;
