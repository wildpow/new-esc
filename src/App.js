import React, { Component } from 'react';
import Topper from './components/Topper.js';
import 'normalize.css';

class App extends Component {
  render() {
    return (
      <div>
        <Topper />
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default App;
