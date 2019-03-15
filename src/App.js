import React, { Component } from 'react';
import './App.css';
import NavbarHeader from '../src/components/Navbar/index'
import SidebarMenu from '../src/components/SidebarMenu/index'
import MainContentBlock from '../src/components/MainContent/index'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavbarHeader />
        <div className="app-body">
          <SidebarMenu />
          <MainContentBlock />
        </div>
      </div>

    );
  }
}

export default App;
