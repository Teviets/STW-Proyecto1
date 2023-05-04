import './App.css';

import React from 'react';
import Header from "./header/Header.js";
import Titulo from "./titulo/Titulo.js";
import Publi from "./publi/Publi.js";

// export default class Header extends React.Component
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Titulo/>
        <Publi/>
      </div>
    );
  }
}


