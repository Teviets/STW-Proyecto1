import React, { Component } from 'react'

import "./ubicacion.css";

export default class ubicacion extends Component {
  render() {
    return (
        <div id='ubicacionContainer'>
            <h2>A dónde irás</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3246.4191509019124!2d-90.51713598872449!3d14.618163915062409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a231f18f9e85%3A0x839dbdb65ad57726!2sQuo!5e0!3m2!1ses!2sgt!4v1683438221339!5m2!1ses!2sgt" 
                width="1127" 
                height="488" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade"
                id='mapa'></iframe>
            <div>
                <h3>Ciudad de Guatemala, Guatemala</h3>
                <div id='descripUbi'>La ubicación del apartamento es en zona 4, a una cuadra de la avenida la reforma, cerca de la zona 10 y 9. Es un lugar muy seguro, con área Comercial y guardia en cada espacio.</div>
            </div>
        </div>
    )
  }
}
//1127 × 488