import React, { Component } from 'react';
import './App.css';
import NavbarHeader from '../src/components/Navbar/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
        Hello World
      </div>

    );
  }
}

export default App;
