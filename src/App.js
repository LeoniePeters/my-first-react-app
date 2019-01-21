import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Title from './components/Title'
import LightSwitch from './components/LightSwitch'
import UserBoard from './components/UserBoard'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Codaisseur</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>

        <main>
          <Title content="Some Simple Title" />
          <LightSwitch />
          <UserBoard />
        </main>
      </div>
    );
  }
}

export default App;
