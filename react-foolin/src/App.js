import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Route path="/" exact component{Home} />
        
      </div>
    );
  }
}

export default App;
