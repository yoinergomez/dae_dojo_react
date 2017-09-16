import React, { Component } from 'react';
import axios from 'axios'
import logo from './logo.svg';
import './App.css';

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

class NASA extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imgUrl: ''
    }
    this.getImage = this.getImage.bind(this)
  }

  getImage(event) {
    var self = this
    axios.get(url)
      .then(function(response){
        console.log(response.data.url)
        self.setState({imgUrl: response.data.url})
      })
      .catch(function(error){

      })
  }

  render() {
    return(
      <div>
        <img src={this.state.imgUrl} />
        <br/>
        <button onClick={this.getImage}> PUSH ME </button>
      </div>
    )
  }
}

export {App, NASA};
