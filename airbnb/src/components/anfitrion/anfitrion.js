import React, { Component } from 'react';

import "./anfitrion.scss";

import Estrella from "../../assets/vectores/estrella.svg";
import Escudo from "../../assets/vectores/escudo.svg";
import Medalla from "../../assets/vectores/medalla.svg";
import Airbnb from "../../assets/vectores/airbnb.svg";
import Anfitrion from "../../assets/img/anfi.webp";


export default class anfitrion extends Component {
  render() {
    return (
        <div id='containerAnfitrion'>
            <div id='titAnfi'>
                <img src={Anfitrion} height="60px" width="60px"/>
                <div id='titAnfiText'>
                    <div>Anfitrión: Alex</div>
                    <div>Se registró en abril de 2019</div>
                </div>
            </div>
            <div  id='contenedorCalAnf'>
                <div>
                    <div id='divGridCalAnf'>
                        <div>
                            <img src={Estrella} height="20px" width="20px" className='iconoAnfi'/>
                            <span className='textoGeneralAnfi'>220 reseñas</span>
                        </div>
                        <div>
                            <img src={Escudo} height="20px" width="20px" className='iconoAnfi'/>
                            <span className='textoGeneralAnfi'>Identidad verificada</span>
                        </div>
                        <div>
                            <img src={Medalla} height="20px" width="20px" className='iconoAnfi'/>
                            <span className='textoGeneralAnfi'>Superanfitrión</span>
                        </div>
                    </div>
                    <div className='textoGeneralAnfi'>Soy profesor universitario, guatemalteco y emprendedor.</div>
                    <div>
                        <h3>Alex es Superanfitrión</h3>
                        <div className='textoGeneralAnfi'>Los Superanfitriones tienen mucha experiencia, tienen valoraciones excelentes y se esfuerzan al máximo para ofrecerles a los huéspedes estadías maravillosas.</div>
                    </div>
                </div>
                <div id='segundoContenidoAnfi'>
                    <div className='textoGeneralAnfi'>
                        Índice de respuesta: 100%
                    </div>
                    <div className='textoGeneralAnfi'>Tiempo de respuesta: en menos de una hora</div>
                    <button id='contactoAnfi'>Contacta al anfitrión</button>
                    <div id='anfiFinal'>
                        <img src={Airbnb} height="20px" width="20px" className='iconoAnfi'/>
                        <div id='textoFinalAnfi'>Para proteger tus pagos, nunca transfieras dinero ni te comuniques fuera de la página o la aplicación de Airbnb.</div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}
