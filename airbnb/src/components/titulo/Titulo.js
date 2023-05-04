import React from "react";

import Medalla from "../../assets/vectores/medalla.svg";
import Estrella from "../../assets/vectores/estrella.svg";

export default class Titulo extends React.Component{
    render () {
        return (
            <header>
                <div>
                    <h1>Apartamento Minimalista, Cerca de zona 10 y 9.</h1>
                </div>
                <div>
                    <div>
                        <span>
                            <img src={Estrella} height="15px" width="15px"/>
                        </span>
                        <span>4.88</span>
                        <span>·</span>
                        <span>
                            <a>60 reseñas</a>
                        </span>
                        <span>·</span>
                        <span>
                            <img src={Medalla} height="15px" width="15px"/>
                        </span>
                        <span>Superanfitrión</span>
                        <span>·</span>
                        <span>
                            <a>Ciudad de Guatemala, Guatemala</a>
                        </span>
                    </div>
                    <div>
                        <div>
                            <span>
                                <img/>
                            </span>
                            <span>
                                <a>Compartir</a>
                            </span>
                        </div>
                        <div>
                            <span>
                                <img/>
                            </span>
                            <span>
                                <a>Guardar</a>
                            </span>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}