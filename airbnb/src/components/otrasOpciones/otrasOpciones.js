import React, { Component } from 'react';

import "./otrasOpciones.css";

import Flecha from "../../assets/vectores/flechaDerecha.svg";

export default class otrasOpciones extends Component {
  render() {
    return (
        <div id='otrasOpcionesContainer'>
          <div id='margenGen'>
            <h2>Descubre otras opciones en Ciudad de Guatemala y sus alrededores</h2> 
            <div id='gridOtrasOpciones'>
                <div className='otraOpcion'>Monterrico</div>
                <div className='otraOpcion'>Paredon</div>
                <div className='otraOpcion'>Playa Metalio</div>
                <div className='otraOpcion'>Playa Costa Azul</div>
                <div className='otraOpcion'>Los Cobanos</div>
                <div className='otraOpcion'>Antigua Guatemala</div>
                <div className='otraOpcion'>Lago de Atitlán</div>
                <div className='otraOpcion'>Barra de Santiago</div>
                <div className='otraOpcion'>Lago de Coatepeque</div>
                <div className='otraOpcion'>Panajachel</div>
                <div className='otraOpcion'>Port of San Jose</div>
                <div className='otraOpcion'>Playa Costa del Sol</div>
            </div>
            <div>
                <span className='linksOtrasOpciones'>Airbnb</span>
                <span className='linksOtrasOpciones'><img src={Flecha} height="10px" width="10px"/></span>
                <span className='linksOtrasOpciones'>Guatemala</span>
                <span className='linksOtrasOpciones'><img src={Flecha} height="10px" width="10px"/></span>
                <span className='linksOtrasOpciones'>Guatemala City Metropolitan Area</span>
                <span className='linksOtrasOpciones'><img src={Flecha} height="10px" width="10px"/></span>
                <span className='linksOtrasOpciones'>Ciudad de Guatemala</span>
            </div>
          </div>
            
        </div>
    )
  }
}
