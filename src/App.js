import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  

  componentDidMount () {
    const GphApiClient = require('giphy-js-sdk-core')
    const client = GphApiClient("CyIdybqkZ7SkYoXz8NBOsqIV4bSpDx86")
    let random = Math.floor(Math.random() * 101);
    /// Gif Search
    client.search( 'gifs', { "q": "puppies", "offset": random , "limit": 1 } )
    .then((response) => {
      response.data.forEach((gifObject) => {
        console.log(gifObject)
      })
    })
    .catch((err) => {
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
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
      </div>
    );
  }
}

export default App;
