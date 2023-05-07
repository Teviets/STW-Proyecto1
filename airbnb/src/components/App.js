import './App.css';

import React from 'react';
import Header from "./header/Header.js";
import Titulo from "./titulo/Titulo.js";
import Publi from "./publi/Publi.js";
import Descripcion from "./descripcion/descripcion.js";
import Card from "./Carta/Card.js";
import Info_Gen from "./info_Gen/info_Gen.js";
import Aircover from "./aircover/aircover.js";
import Info from "./info/Info.js";
import Cuarto from "./cuarto/Cuarto.js";
import Servicios from "./servicios/Servicios.js";


// export default class Header extends React.Component
export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Titulo/>
        <Publi/>
        <div id='descripYCard'>
          <div>
            <Descripcion/>
            <Info_Gen/>
            <Aircover/>
            <Info/>
            <Cuarto/>
            <Servicios/>
          </div>
          <div className='scroll-card'>
            <Card/>
          </div>
        </div>
      </div>
    );
  }
}


