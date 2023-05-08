import React, { Component } from 'react'

import "./generalidades.scss";

export default class generalidades extends Component {
  render() {
    return (
        <div id='conteinerGeneralidades'>
            <div id='margenGeneralidades'>
                <div className='generalidades'>
                    <h3>Asistencia</h3>
                    <div className='generalidadEnsi'>Centro de ayuda</div>
                    <div className='generalidadEnsi'>AirCover</div>
                    <div className='generalidadEnsi'>Apoyo a las personas con discapacidad</div>
                    <div className='generalidadEnsi'>Opciones de cancelación</div>
                    <div className='generalidadEnsi'>Nuestra respuesta frente a la COVID-19</div>
                    <div className='generalidadEnsi'>Denunciar un problema en el vecindario</div>
                </div>
                <div className='generalidades'>
                    <h3>Comunidad</h3>
                    <div className='generalidadEnsi'>Airbnb.org: alojamiento de ayuda en caso de catástrofe</div>
                    <div className='generalidadEnsi'>Luchamos contra la discriminación</div>
                </div>
                <div className='generalidades'>
                    <h3>Modo anfitrión</h3>
                    <div className='generalidadEnsi'>Pon tu espacio en Airbnb</div>
                    <div className='generalidadEnsi'>AirCover para anfitriones</div>
                    <div className='generalidadEnsi'>Recursos para anfitriones</div>
                    <div className='generalidadEnsi'>Visita el foro de la comunidad</div>
                    <div className='generalidadEnsi'>Cómo brindar servicios de anfitrión de forma responsable</div>
                </div>
                <div className='generalidades'>
                    <h3>Airbnb</h3>
                    <div className='generalidadEnsi'>Sala de prensa</div>
                    <div className='generalidadEnsi'>Más información sobre las nuevas funciones</div>
                    <div className='generalidadEnsi'>Carta de nuestros fundadores</div>
                    <div className='generalidadEnsi'>Carreras</div>
                    <div className='generalidadEnsi'>Inversionistas</div>
                </div>
            </div>
        </div>
    )
  }
}
