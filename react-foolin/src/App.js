import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  // Link
} from 'react-router-dom';


import Home from './Home';
import About from './About';
import Contact from './Contact';
import NavBar from './NavBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state =
  }
  render() {
    const BrowserRouter = require('react-router-dom').BrowserRouter
    const Route = require('react-router-dom').Route
    const Link = require('react-router-dom').Link

    return (
      <Router>
        <div>
          <NavBar />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        
      </div>
      </Router>
    );
  }
}

export default App;
