import React from 'react';

import './info.css';


export default class Info extends React.Component {
  render() {
    return (
      <div id="InfoContainer">
        <p>
            Apartamento moderno, ubicado a pocos minutos de la zona 10, 9, 14. Cercano al aeropuerto, restaurantes y centro comerciales. Se encuentra en la zona 4, a una cuadra de la avenida la reforma.   QUO, es un proyecto que incluye apartamentos, restaurantes, supermercado, gym, etc. todo en un mismo lugar. El apartamento cuenta con parqueo para un vehículo.  Es Smart home. A pocos pasos se encuentra el Restaurante y panadería San Martín....
        </p>
        <button className='buttonMore'>Mostrar más</button>
      </div>
    );
  }
}


