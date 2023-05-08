import React, { Component } from 'react';
import "./reseñaIndividual.scss";

export default class reseñaIndividual extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
        <div id='containerReseñaInd'>
            <div id='infoReseña'>
                <img src={this.props.img} id='imgProfileReview'/>
                <div id='infoGenReseña'>
                    <span id='NombreReseña'>{this.props.nombre}</span>
                    <span id='fechaReseña'>{this.props.fecha}</span>
                </div>
            </div>
            <div id='comentarioReseña'>
                <span>{this.props.comentario}</span>
            </div>
        </div>
        )
    }
}
