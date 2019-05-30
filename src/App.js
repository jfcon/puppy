import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor () {
    super();
    this.state = {
      gif : ""
    }
  }
  

  componentDidMount () {
    const GphApiClient = require('giphy-js-sdk-core')
    const client = GphApiClient("CyIdybqkZ7SkYoXz8NBOsqIV4bSpDx86")
    let random = Math.floor(Math.random() * 101);
    /// Gif Search
    client.search( 'gifs', { "q": "puppies", "offset": random , "limit": 1 } )
    .then((response) => {
      response.data.forEach((gifObject) => {
        let theGIF = gifObject.images.original.url
        console.log(theGIF)
        this.setState({gif : theGIF})
      })
    })
    .catch((err) => {
    })
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={this.state.gif}  alt="puppy gif" />
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
