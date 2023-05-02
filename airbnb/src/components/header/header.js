import React from "react";

import "./Header.css";
import logo from "../../assets/img/logo.png";
import lupa from "../../assets/vectores/lupa.svg";
import world from "../../assets/vectores/world.svg";
import option from "../../assets/vectores/opciones.svg";
import login from "../../assets/vectores/login.svg";

export default class Header extends React.Component{
    render () {
        return (
            <header>
                <div id="logo">
                    <img id="Airbnb" src={ logo } height="32px" width="100px" />
                </div>
                <div id="busqueda">
                    <button id="ButtonBusqueda">
                        <span>Empieza la búsqueda</span>
                        <div id="lupa">
                            <img src={ lupa } height="16px" width="16px"/>
                        </div>
                    </button>
                </div>
                <nav id="menu">
                    <div id="first">
                        <div id="agregar">
                            <span>Pon tu espacio en Airbnb</span>
                        </div>
                        <div id="world">
                            <button>
                                <img src={world} />
                            </button>
                        </div>
                    </div>
                    <div id="second">
                        <button id="ButtonSecond">
                            <div>
                                <img src={option}/>
                            </div>
                            <div>
                                <img src={login}/>
                            </div>
                        </button>
                    </div>
                    
                </nav>
            </header>
        )
    }
}