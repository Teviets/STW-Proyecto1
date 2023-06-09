import React from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grow from "@mui/material/Grow";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import logo from "../../assets/img/logo.png";
import lupa from "../../assets/vectores/lupa.svg";
import world from "../../assets/vectores/world.svg";
import option from "../../assets/vectores/opciones.svg";
import login from "../../assets/vectores/login.svg";
import "./Header.scss";

const style = {
    position: "absolute",
    top: "0%",
    left: "0%",
    width: "100%",
    height: "190px",
    backgroundColor: "#ffffff",
};

const styleButton = {
    backgroundColor: "#f7f7f7",
    color: "#000000",
    border: "none",
    borderRadius: "30px",
    padding: '12px 24px',
    "&.Mui-selected": {
        backgroundColor: "#B8E4B4",
    },
}

const styleButtonGroup={
    backgroundColor: "#f7f7f7",
    borderRadius: "30px"
}

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      activeButton: "estadias",
    };
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleButtonClick = (buttonName) => {
    this.setState({ activeButton: buttonName });
  };

  render() {
    const buttons = [
            {
            name: "estadias",
            content: <div className="botongroup"><ButtonGroup style={styleButtonGroup} variant="contained" aria-label="outlined primary button group"><Button style={styleButton}>Dónde</Button><Button style={styleButton}>Llegada</Button><Button style={styleButton}>Salida</Button><Button style={styleButton}>Quien <div id="lupa"><img src={lupa} height="16px" width="16px" alt="lupa" /></div></Button></ButtonGroup></div>,
            active: this.state.activeButton === "estadias",
            },
            {
            name: "experiencias",
            content: <div className="botongroup"><ButtonGroup style={styleButtonGroup} variant="contained" aria-label="outlined primary button group"><Button style={styleButton}>Dónde</Button><Button style={styleButton}>Fecha</Button><Button style={styleButton}>Quien <div id="lupa"><img src={lupa} height="16px" width="16px" alt="lupa" /></div></Button></ButtonGroup></div>,
            active: this.state.activeButton === "experiencias",
            },
            {
            name: "enLinea",
            content: <div className="botongroup">Contenido de Experiencias en Línea</div>,
            active: this.state.activeButton === "enLinea",
            },
        ];
    return (
        <header id="miTitulo">
            <div id="logo">
            <img
                id="Airbnb"
                src={logo}
                height="32px"
                width="100px"
                alt="Airbnb"
            />
            </div>
            <div id="busqueda">
            <button id="ButtonBusqueda" onClick={this.handleOpen}>
                <span className="spanHeader" id="spanBusqueda">
                Empieza la búsqueda
                </span>
                <div id="lupa">
                <img src={lupa} height="16px" width="16px" alt="lupa" />
                </div>
            </button>
            </div>
            <nav id="menu">
                <div id="first">
                    <div id="agregar">
                    <span className="spanHeader">Pon tu espacio en Airbnb</span>
                    </div>
                    <div id="world">
                    <button id="worldButton" height="20px" width="21px">
                        <img src={world} height="20px" width="20px" alt="world" />
                    </button>
                    </div>
            </div>
            <div id="second">
                <button id="ButtonSecond">
                <img
                    id="option"
                    src={option}
                    height="20px"
                    width="20px"
                    alt="option"
                />
                <img
                    id="login"
                    src={login}
                    height="20px"
                    width="20px"
                    alt="login"
                />
                </button>
            </div>
            </nav>
            <Modal
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                >
                <Grow in={this.state.open}>
                    <Box style={style}>
                        <div id="modalBusqueda">
                            <div id="modalNavUp">
                                <div id="logo">
                                    <img
                                    id="Airbnb"
                                    src={logo}
                                    height="32px"
                                    width="100px"
                                    alt="Airbnb"
                                    />
                                </div>
                                <div id="menuGeneralModal">
                                    <button
                                        className={`menuGenModalButton ${
                                            this.state.activeButton === "estadias" ? "active" : ""
                                        }`}
                                        onClick={() => this.handleButtonClick("estadias")}
                                        >
                                        <span className="spanMenu">Estadías</span>
                                    </button>
                                    <button
                                        className={`menuGenModalButton ${
                                            this.state.activeButton === "experiencias" ? "active" : ""
                                        }`}
                                        onClick={() => this.handleButtonClick("experiencias")}
                                        >
                                        <span className="spanMenu">Experiencias</span>
                                    </button>
                                    <button
                                        className={`menuGenModalButton ${
                                            this.state.activeButton === "enLinea" ? "active" : ""
                                        }`}
                                        onClick={() => this.handleButtonClick("enLinea")}
                                        >
                                        <span className="spanMenu">Experiencias en línea</span>
                                    </button>
                                </div>
                                <div>
                                    <nav id="menu">
                                        <div id="first">
                                            <div id="agregar">
                                                <span className="spanHeader">
                                                    Pon tu espacio en Airbnb
                                                </span>
                                            </div>
                                            <div id="world">
                                                <button id="worldButton" height="20px" width="21px">
                                                    <img
                                                    src={world}
                                                    height="20px"
                                                    width="20px"
                                                    alt="world"
                                                    />
                                                </button>
                                            </div>
                                        </div>
                                        <div id="second">
                                            <button id="ButtonSecond">
                                                <img
                                                    id="option"
                                                    src={option}
                                                    height="20px"
                                                    width="20px"
                                                    alt="option"
                                                />
                                                <img
                                                    id="login"
                                                    src={login}
                                                    height="20px"
                                                    width="20px"
                                                    alt="login"
                                                />
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div id="contentButtonActive">
                                {buttons.map((button) => (
                                    <div
                                    key={button.name}
                                    className={`menuGenModalContent ${
                                        button.active ? "active" : ""
                                    }`}
                                    >
                                    {button.content}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </Box>
                </Grow>
            </Modal>
        </header>
    );
  }
}
