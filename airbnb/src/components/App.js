import './App.css';

import React from 'react';
import Header from "./header/Header.js";
import Titulo from "./titulo/Titulo.js";
import Publi from "./publi/Publi.js";
import Descripcion from "./descripcion/descripcion.js";
import Card from "./Carta/Card.js";

// export default class Header extends React.Component
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Titulo/>
        <Publi/>
        <div id='descripYCard'>
          <Descripcion/>
          <Card/>
        </div>
      </div>
    );
  }
}


