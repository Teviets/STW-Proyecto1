import React from 'react';

import "./Card.css";

import Estrella from "../../assets/vectores/estrella.svg";

export default class Card extends React.Component {
  render() {
    return (
      <div id='containerCard'>
        <div>
            <div>
                <span>Q320 GTQ</span>
                <span>noche</span>
            </div>
            <div>
                <span className="calSpan">
                    <img src={Estrella} height="15px" width="15px"/>
                </span>
                <span className="calSpan">
                    4.88
                </span>
                <span className="calSpan">·</span>
                <span>60 reseñas</span>
            </div>
        </div>
        <div>

        </div>
      </div>
    );
  }
}


