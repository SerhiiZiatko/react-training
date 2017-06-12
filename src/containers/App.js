import React, { Component } from 'react';
import {connect} from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
      </div>
    );
  }
}

export default connect(
    state => ({
        state
    }),
    dispatch => ({
        
    })
)(App);
