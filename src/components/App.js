import React, { Component } from 'react';
import { Link } from 'react-router';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Countries & Capitals</h2>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/countries">Countries</Link></li>
            </ul>
          </nav>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
