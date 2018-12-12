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
  render() {
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
