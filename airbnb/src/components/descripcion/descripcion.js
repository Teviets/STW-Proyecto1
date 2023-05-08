import React from "react";

import "./descripcion.scss";

import Anfitrion from "../../assets/img/anfi.webp";

export default class descripcion extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
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
                    <div id="divButtonAnfi">
                        <button id="buttonAnfi">
                            <img src={Anfitrion} alt="Anfitrion" height="70px" width="80px"/>
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}