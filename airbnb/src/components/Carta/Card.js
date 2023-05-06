import React from 'react';

import "./Card.css";

import Estrella from "../../assets/vectores/estrella.svg";
import Bandera from "../../assets/vectores/bandera.svg";
import Down from "../../assets/vectores/down.svg";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div id='scroll'>
        <div id='containerCard'>
          <div id='calificacionPrecio'>
              <div className='margenesCalCard'>
                  <span className="calSpan" id='precio'>Q320 GTQ</span>
                  <span className="calSpan" >noche</span>
              </div>
              <div className='margenesCalCard'> 
                  <span className="calSpan">
                      <img src={Estrella} height="14px" width="14px"/>
                  </span>
                  <span className="calSpan">
                      4.88
                  </span>
                  <span className="calSpan">·</span>
                  <span className="calSpan">60 reseñas</span>
              </div>
          </div>
          <div id='DateButtons'>
            <button id='fechas'>
              <div id='fechaInicio'>
                <div className='titButton'>LLEGADA</div>
                <div>nowDate</div>
              </div>
              <div id='fechaFin'>
                <div className='titButton'>SALIDA</div>
                <div>fechaSal</div>
              </div>
            </button>
            <button id='capacidad'>
              <div id='textoButtonCard'>
                <div className='titButton'>HUESPEDES</div>
                <div>123 Huespedes</div>
              </div>
              <img  id="downUp" src={Down} height="20px" width="20px" />
            </button>
          </div>
          <div id='reservar'>
            <button id='buttonReserv'>Comprobar disponibilidad</button>
          </div>
        </div>
        <div id='denuncia'>
          <div id='banderaDenuncia'>
            <img src={Bandera} height="14px" width="14px"/>
          </div>
          <div>
            <span id>Denuncia este anuncio</span>
          </div>
        </div>
      </div>
    );
  }
}


