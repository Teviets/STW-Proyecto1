import './App.scss';

import React from 'react';
import Header from "./header/header.js";
import Titulo from "./titulo/Titulo.js";
import Publi from "./publi/publi.js";
import Descripcion from "./descripcion/descripcion.js";
import Card from "./Carta/Card.js";
import Info_Gen from "./info_Gen/info_Gen.js";
import Aircover from "./aircover/aircover.js";
import Info from "./info/Info.js";
import Cuarto from "./cuarto/Cuarto.js";
import Servicios from "./servicios/Servicios.js";
import Calendario from "./Calendario/Calendario.js";
import Reseñas from "./reseñas/reseñas.js";
import Ubicacion from "./ubicacion/ubicacion.js";
import Anfitrion from "./anfitrion/anfitrion.js";
import Saber from "./saber/Saber.js";
import OtraOpcion from "./otrasOpciones/otrasOpciones.js";
import Generalidades from "./Generalidades/generalidades.js";
import Footer from "./footer/footer.js";

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
            <Calendario/>
          </div>
          <div className='scroll-card'>
            <Card/>
          </div>
          
        </div>
        <Reseñas/>
        <Ubicacion/>
        <Anfitrion/>
        <Saber/>
        <OtraOpcion/>
        <Generalidades/>
        <Footer/>
      </div>
    );
  }
}


