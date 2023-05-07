import React from 'react';

import './aircover.css';

import airCover from "../../assets/img/aircover.webp"

// export default class Header extends React.Component
export default class aircover extends React.Component {
  render() {
    return (
      <div id='aircoverContainer'>
        <h2>
            <img src={airCover} height="26px" width="123px"/>
        </h2>
        <div>
            Todas las reservaciones incluyen protección gratuita en caso de que el anfitrión cancele, de que haya imprecisiones en el anuncio o de que surjan otros inconvenientes, como problemas al momento de hacer el check-in. 
        </div>
        <button className='buttonMore'>Mas información</button>
      </div>
    );
  }
}


