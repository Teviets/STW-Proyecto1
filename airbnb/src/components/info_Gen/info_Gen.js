import React from "react";

import "./info_Gen.css";

import Trabajo from "../../assets/vectores/trabajo.svg";
import Puerta from "../../assets/vectores/puerta.svg";
import Medalla from "../../assets/vectores/superanfitrion.svg"

export default class info_Gen extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div id="containerInfoGen">
                <div id="work">
                    <div className="imgDescrip">
                        <img src={Trabajo} height="30px" width="30px" className="iconosInfoGen"/>
                    </div>
                    <div className="descripInfoGen">
                        <span className="titInfoGen">Zona de trabajo</span>
                        <span className="desInfoGen">Una habitación con wifi que es ideal para trabajar.</span>
                    </div>
                </div>
                <div id="llegada">
                    <div className="imgDescrip">
                        <img src={Puerta} height="30px" width="30px" className="iconosInfoGen"/>
                    </div>
                    <div className="descripInfoGen">
                        <span className="titInfoGen">Llegada autónoma</span>
                        <span className="desInfoGen">Realiza la llegada fácilmente mediante la cerradura con teclado.</span>
                    </div>
                </div>
                <div id="anfitrionAlex">
                    <div className="imgDescrip">
                        <img src={Medalla} height="30px" width="30px" className="iconosInfoGen"/>
                    </div>
                    <div className="descripInfoGen">
                        <span className="titInfoGen">Alex tiene la categoría de Superanfitrión</span>
                        <span className="desInfoGen">Los Superanfitriones tienen mucha experiencia, cuentan con valoraciones excelentes y se esfuerzan al máximo para ofrecerles a los huéspedes estadías maravillosas.</span>
                    </div>
                </div>
            </div>
        )
    }
}