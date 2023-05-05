import React from "react";

export default class Titulo extends React.Component{
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <div>
                <div id="work">
                    <div>
                        <img/>
                    </div>
                    <div>
                        <span>Zona de trabajo</span>
                        <span>Una habitación con wifi que es ideal para trabajar.</span>
                    </div>
                </div>
                <div id="llegada">
                    <div>
                        <img/>
                    </div>
                    <div>
                        <span>Llegada autónoma</span>
                        <span>Realiza la llegada fácilmente mediante la cerradura con teclado.</span>
                    </div>
                </div>
                <div id="alex">
                    <div>
                        <img/>
                    </div>
                    <div>
                        <span>Alex tiene la categoría de Superanfitrión</span>
                        <span>Los Superanfitriones tienen mucha experiencia, cuentan con valoraciones excelentes y se esfuerzan al máximo para ofrecerles a los huéspedes estadías maravillosas.</span>
                    </div>
                </div>
            </div>
        )
    }
}