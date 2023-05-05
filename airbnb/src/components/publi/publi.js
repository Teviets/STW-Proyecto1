import React from "react";
import "./publi.css";

import Principal from "../../assets/img/Principal.png";
import Secundaria1 from "../../assets/img/Secundaria1.png";
import Secundaria2 from "../../assets/img/Secundaria2.png";
import Secundaria3 from "../../assets/img/Secundaria3.png";
import Secundaria4 from "../../assets/img/Secundaria4.png";

export default class Publi extends React.Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="GlobalPubli">
                <div id="laPrincipal">
                    <img id="principal" src={Principal}/>
                </div>
                <div id="secundarias1">
                    <img className="secundaria" src={Secundaria1}/>
                    <img className="secundaria" src={Secundaria3}/>
                </div>
                <div id="secundarias2">
                    <img className="secundaria" id="arriba" src={Secundaria2}/>
                    <img className="secundaria" id="abajo" src={Secundaria4}/>
                </div>
            </div>
        )
    }
}
    