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
            <header id="miTitulo">
                <div id="logo">
                    <img id="Airbnb" src={ logo } height="32px" width="100px" />
                </div>
                <div id="busqueda">
                    <button id="ButtonBusqueda">
                        <span className="spanHeader" id="spanBusqueda">Empieza la búsqueda</span>
                        <div id="lupa">
                            <img src={ lupa } height="16px" width="16px"/>
                        </div>
                    </button>
                </div>
                <nav id="menu">
                    <div id="first">
                        <div id="agregar">
                            <span className="spanHeader">Pon tu espacio en Airbnb</span>
                        </div>
                        <div id="world" >
                            <button id="worldButton" height="20px" width="21px">
                                <img src={world} height="20px" width="20px"/>
                            </button>
                        </div>
                    </div>
                    <div id="second">
                        <button id="ButtonSecond">
                            <img id="option" src={option} height="20px" width="20px"/>
                            <img id="login" src={login} height="20px" width="20px"/>
                        </button>
                    </div>
                    
                </nav>
            </header>
        )
    }
}