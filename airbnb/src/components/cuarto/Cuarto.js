import React from 'react';

import './Cuarto.css';

import Cama from  "../../assets/img/Cuarto.webp"

export default class App extends React.Component {
  render() {
    return (
      <div id="CuartoContainer">
        <h2>¿Dónde vas a dormir?</h2>
        <button id='buttonCuarto'>
            <div id='imgCamaCuarto'>
                <img id="camaImage" src={Cama} />
            </div>
            <div className='buttonCamaText' id='titButtonCamaText'>Habitación</div>
            <div className='buttonCamaText'>1 cama queen</div>
        </button>
      </div>
    );
  }
}


