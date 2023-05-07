import React, { Component } from 'react';

import "./saber.css";

export default class Saber extends Component {
  render() {
    return (
        <div id='saberContainer'>
            <h2>Lo que debes saber</h2>
            <div id='todoSaber'>
                <div className='saber'>
                    <h3>Reglas de la casa</h3>
                    <div>El horario de check-in es de las 15:00 a las 21:00</div>
                    <div>La salida es antes de las 12:00</div>
                    <div>2 huéspedes como máximo</div>
                </div>
                <div className='saber'>
                    <h3>Seguridad y propiedad</h3>
                    <div>No hay alarma de humo</div>
                    <div>No se requiere detector de monóxido de carbono</div>
                    <div>No apto para niños ni bebés</div>
                </div>
                <div >
                    <h3>Política de cancelación</h3>
                    <div>Agrega las fechas de tu viaje para obtener los detalles de cancelación de esta estadía.</div>
                </div>
            </div>
            
        </div>
    )
  }
}
