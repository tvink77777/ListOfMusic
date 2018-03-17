import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../store/Music/Actions";
import MusicList from "../../components/MusicList";
import Search from "../../components/Search";
import Spinner from "../../components/Spinner";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="music container">
        <h1 className="center">Music list app</h1>
        <Search onSearch={this.props.onSearch} />
        {!this.props.requestPending ? <MusicList listOfMusic={this.props.listOfMusic} /> : <Spinner />}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  listOfMusic: state.listOfMusic,
  requestPending: state.requestPending
});

const mapDispatchToProps = dispatch => ({
  onSearch: inputValue => dispatch(actions.getMusic(inputValue))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
