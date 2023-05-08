import React from "react";
import "./Titulo.scss";

import Medalla from "../../assets/vectores/medalla.svg";
import Estrella from "../../assets/vectores/estrella.svg";
import Share from "../../assets/vectores/share.svg";
import Corazon from "../../assets/vectores/corazon.svg";

export default class Titulo extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <header id="tituloAirbnb">
                <div id="nombre">
                    <h1>Apartamento Minimalista, Cerca de zona 10 y 9.</h1>
                </div>
                <div id="subtitulo">
                    <div id="Calificacion">
                        <span className="calSpan">
                            <img src={Estrella} height="15px" width="15px"/>
                        </span>
                        <span className="calSpan">4.88</span>
                        <span className="calSpan">·</span>
                        <span className="calSpan">
                            <button className="btnCalf">60 reseñas</button>
                        </span>
                        <span className="calSpan">·</span>
                        <span className="calSpan">
                            <img src={Medalla} height="15px" width="15px"/>
                        </span>
                        <span className="calSpan">Superanfitrión</span>
                        <span className="calSpan">·</span>
                        <span className="calSpan">
                            <button className="btnCalf">Ciudad de Guatemala, Guatemala</button>
                        </span>
                    </div>
                    <div id="share">
                        <div className="btnOptionsShare">
                            <button className="btnShare">
                                <span>
                                    <img className="imgShare" src={Share} height="18px" width="18px"/>
                                </span>
                                Compartir
                            </button>
                        </div>
                        <div className="btnOptionsShare">
                            <button className="btnShare">
                                <span>
                                    <img className="imgShare" src={Corazon} height="18px" width="18px"/>
                                </span>
                                Guardar
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}