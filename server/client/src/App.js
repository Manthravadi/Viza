import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {

  constructor(props){
    super(props);
    this.check = this.check.bind(this);
  }

  check(){
    alert("entered check");
    axios.get('http://localhost:5000/auth/azure');
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <button 
            className="App-link"
            onClick={this.check}>
            Learn React
          </button>
          <a href='http://localhost:5000/auth/azure'>Hello</a>
        </header>
      </div>
    );
  }
}

export default App;
