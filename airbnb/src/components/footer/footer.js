import React, { Component } from 'react';

import "./footer.scss";

import World from "../../assets/vectores/world.svg";
import Facebook from "../../assets/vectores/facebook.svg";
import Twitter from "../../assets/vectores/twitter.svg";
import Instagram from "../../assets/vectores/instagram.svg";

export default class footer extends Component {
  render() {
    return (
        <div id='conteinerFooter'>
            <footer id='footerfoo'>
                <div>
                    <span className='footerText'>© 2023 Airbnb, Inc</span>
                    <span className='footerText'>·</span>
                    <span className='footerText'>Privacidad</span>
                    <span className='footerText'>·</span>
                    <span className='footerText'>Términos</span>
                    <span className='footerText'>·</span>
                    <span className='footerText'>Mapa del sitio</span>
                </div>
                <div>
                    <span className='footerText'>
                        <img src={World} height="20px" width="20px"/>
                    </span>
                    <span className='footerText'>Español (GT)</span>
                    <span className='footerText' >GTQ</span>
                    <span className='footerText'>
                        <img src={Facebook} height="20px" width="20px"/>
                    </span>
                    <span className='footerText'>
                        <img src={Twitter} height="20px" width="20px"/>
                    </span>
                    <span className='footerText'>
                        <img src={Instagram} height="20px" width="20px"/>
                    </span>
                </div>
            </footer>
        </div>
        
    )
  }
}
