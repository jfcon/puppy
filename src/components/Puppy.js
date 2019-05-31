import React, { Component } from 'react';
import '../styles/Puppy.css';


class PuppyWindow extends Component {
  
  constructor () {
    super();
    this.state = {
      gif : ""
    }
  }


  componentDidMount () {
    this.getPuppyGif();
  }

  getPuppyGif = () => {
    const GphApiClient = require('giphy-js-sdk-core')
    const client = GphApiClient('CyIdybqkZ7SkYoXz8NBOsqIV4bSpDx86')
    let random = Math.floor(Math.random() * 251);
    /// Gif Search
    client.search( 'gifs', { "q": "puppies", "offset": random , "limit": 1 , "rating": "g"} )
    .then((response) => {
      response.data.forEach((gifObject) => {
        let theGIF = gifObject.images.original.url
        this.setState({gif : theGIF})
      })
    })
    .catch((err) => {
    })
  }

  render() {
    return (
      <div className="Puppy">
        <header className="Puppy-header">
          <img src={this.state.gif}  alt="puppy gif" /><br />
          <button onClick={this.getPuppyGif}>`Fetch` Me Another!</button>
          <p>Please be patient. It may take a few seconds to load...</p>
        </header>
      </div>
    );
  }
}

export default PuppyWindow;
