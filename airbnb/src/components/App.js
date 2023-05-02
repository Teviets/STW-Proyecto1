import './App.css';

import React from 'react';
import Header from "./header/Header.js";

// export default class Header extends React.Component
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}


