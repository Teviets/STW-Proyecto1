import React from 'react';

import './Servicios.css';

import Ascensor from "../../assets/vectores/ascensor.svg";
import Carro from "../../assets/vectores/carro.svg";
import Cocina from "../../assets/vectores/cocina.svg";
import Copo from "../../assets/vectores/copo.svg";
import DetectorHumo from "../../assets/vectores/detectorHumo.svg";
import DetectorMonoxido from "../../assets/vectores/detectorMono.svg";
import Tele from "../../assets/vectores/tele.svg";
import Trabajo from "../../assets/vectores/trabajo.svg";
import Wifi from "../../assets/vectores/wifi.svg";
import Vista from "../../assets/vectores/vista.svg";

export default class App extends React.Component {
  render() {
    return (
      <div id="ServiciosContainer">
        <h2>Lo que este lugar ofrece</h2>
        <div id='servContainer'>
            <div>
                <div className='include'>
                    <div>
                        <img src={Vista} className='iconoSev'/>
                    </div>
                    <div>Vista al horizonte de la ciudad</div>
                </div>
                <div className='include'>
                    <div>
                        <img src={Wifi} className='iconoSev'/>
                    </div>
                    <div>Wifi de 40 Mbps</div>
                </div>
                <div className='include'>
                    <div>
                        <img src={Carro} className='iconoSev'/>
                    </div>
                    <div>Estacionamiento techado gratuito en las instalaciones: 1 puesto</div>
                </div>
                <div className='include'>
                    <div>
                        <img src={Ascensor} className='iconoSev'/>
                    </div>
                    <div>Ascensor</div>
                </div>
                <div className='include'>
                    <div>
                        <img src={DetectorMonoxido} className='iconoSev'/>
                    </div>
                    <div>Detector de monóxido de carbono</div>
                </div>
            </div>
            <div>
                <div className='include'>
                    <div>
                        <img src={Cocina} className='iconoSev'/>
                    </div>
                    <div>Cocina</div>
                </div>
                <div className='include'>
                    <div>
                        <img src={Trabajo} className='iconoSev'/>
                    </div>
                    <div>Zona de trabajo</div>
                </div>
                <div className='include'>
                    <div>
                        <img src={Tele} className='iconoSev'/>
                    </div>
                    <div>Televisor de alta definición con pantalla de 55 pulgadas y Video de Amazon Prime, Netflix, cable estándar</div>
                </div>
                <div className='include'>
                    <div>
                        <img className='iconoSev' src={Copo}/>
                    </div>
                    <div>Aire acondicionado central</div>
                </div>
                <div className='include'>
                    <div>
                        <img className='iconoSev' src={DetectorHumo}/>
                    </div>
                    <div>Detector de humo</div>
                </div>
            </div>
        </div>
        <div id='divButtonServ'>
            <button id='buttonService'>Mostrar los 34 servicios</button>
        </div>
      </div>
    );
  }
}


