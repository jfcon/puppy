    import React, { Component } from 'react';
    import PuppyWindow from './Puppy';
    import '../styles/Puppy.css';


    class App extends Component {
    
    //   constructor () {
    //     super();
    //     this.state = {
    //       gif : ""
    //     }
    //   }


    render() {
        return (
        <div className="App">
            <PuppyWindow />
        </div>
        );
    }
    }

    export default App;
