import React, { Component } from 'react';
import Topper from './components/TopperComponent/Topper.js';
import MainHeader from './components/MainHeaderComponent/MainHeader.js'
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div>
        <Topper />
        <MainHeader />
      </div>
    );
  }
}

export default App;
