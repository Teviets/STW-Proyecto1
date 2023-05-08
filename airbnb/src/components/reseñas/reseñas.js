import React, { Component } from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import ReseñaIndividual from "../reseñaIndividual/reseñaIndividual.js"

import "./reseñas.scss";

import Gabriela from "../../assets/img/perfilGabriela.webp";
import Alexandre from "../../assets/img/perfilAlexandre.webp";
import Eddie from "../../assets/img/perfilEddie.webp";
import Manuel from "../../assets/img/perfilManuel.webp";
import Andrea from "../../assets/img/perfilAndrea.webp";
import Jorge from "../../assets/img/perfilJorge.webp";

export default class reseñas extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <div id='ContainerReseñas'>
            <h2>
                <img/>
                <span>4.88</span>
                <span>·</span>
                <span>reseñas</span>
            </h2>
            <div id='GlobalCalRes'>
                <div className='caliReseña'>
                    <div className='calificacionReseña'>
                        <span>Limpieza</span>
                        <div className='progresCalDiv'>
                            <div className='progressbar'>
                                <LinearProgress variant="determinate" value={96} max={5.0} color='inherit'/>

                            </div>
                            <span>4.8</span>
                        </div>
                    </div>
                    <div className='calificacionReseña'>
                        <span>Comunicacion</span>
                        <div className='progresCalDiv'>
                            <div className='progressbar'>
                                <LinearProgress variant="determinate" value={100} color='inherit'/>
                            </div>
                            <span>5.0</span>
                        </div>
                    </div>
                    <div className='calificacionReseña'>
                        <span>Llegada</span>
                        <div className='progresCalDiv'>
                            <div className='progressbar'>
                                <LinearProgress variant="determinate" value={100} color='inherit'/>
                            </div>
                            <span>5.0</span>
                        </div>
                    </div>
                </div>
                <div className='caliReseña'>
                    <div className='calificacionReseña'>
                        <span>Fiabilidad</span>
                        <div className='progresCalDiv'>
                            <div className='progressbar'>
                                <LinearProgress variant="determinate" value={100} color='inherit'/>
                            </div>
                            <span>5.0</span>
                        </div>
                    </div>
                    <div className='calificacionReseña'>
                        <span>Ubicacion</span>
                        <div className='progresCalDiv'>
                            <div className='progressbar'>
                                <LinearProgress variant="determinate"  value={100} color='inherit'/>
                            </div>
                            <span>5.0</span>
                        </div>
                    </div>
                    <div className='calificacionReseña'>
                        <span>precio</span>
                        <div className='progresCalDiv'>
                            <div className='progressbar'>
                                <LinearProgress variant="determinate" value={96} color='inherit'/>
                            </div>
                            <span>4.8</span>
                        </div>
                    </div>
                </div>
            </div>
            <div id='comentariosReseñas'>
                <ReseñaIndividual 
                    nombre="Gabriela" 
                    fecha="abril de 2023" 
                    comentario="Muy buen servicio"
                    img={Gabriela}
                    />
                <ReseñaIndividual
                    nombre="Alexandre Massaru" 
                    fecha="enero de 2023" 
                    comentario="Impecable, limpio y cómodo apartamento. Alex es un excelente anfitrión. Siempre disponible y con respuestas rápidas."
                    img={Alexandre}
                />
                <ReseñaIndividual
                    nombre="Eddie Santiago" 
                    fecha="diciembre de 2022" 
                    comentario="Un gusto hospedarme en un apartamento tan limpio y cómodo."
                    img={Eddie}  
                />
                <ReseñaIndividual
                    nombre="Manuel" 
                    fecha="febrero de 2023" 
                    comentario="Excelente ubicación y anfitrión."
                    img={Manuel} 
                />
                <ReseñaIndividual
                    nombre="Andrea" 
                    fecha="diciembre de 2022" 
                    comentario="Todo excelente y limpio. Host muy amable"
                    img={Andrea}
                />
                <ReseñaIndividual
                    nombre="Jorge" 
                    fecha="diciembre de 2022" 
                    comentario="Lugar muy acogedor , vale la pena"
                    img={Jorge}
                />
            </div>
            <button id='buttonMostrarReviews'>
                Mostrar las 60 reseñas
            </button>
        </div>
    )
  }
}
