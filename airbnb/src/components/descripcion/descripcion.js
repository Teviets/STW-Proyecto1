import React from "react";

import "./descripcion.css";

import Anfitrion from "../../assets/img/anfi.webp";

export default class Titulo extends React.Component{
    render () {
        return (
            <div id="descricionContainer">
                <div>
                    <div>
                        <h2>Condo entero - Anfitrión: Alex</h2>
                    </div>
                    <div>
                        <span className="calSpan">2 huéspedes</span>
                        <span className="calSpan">·</span>
                        <span className="calSpan">1 habitación</span>
                        <span className="calSpan">·</span>
                        <span className="calSpan">1 cama</span>
                        <span className="calSpan">·</span>
                        <span className="calSpan">1 baño</span>
                    </div>
                </div>
                <div>
                    <button id="buttonAnfi">
                        <img src={Anfitrion} alt="Anfitrion" />
                    </button>
                </div>
            </div>
        )
    }
}