import React from 'react'
import { Container } from 'react-bootstrap'
import logo from '../../img/logo.svg'

const AcercaDe = () => (
    <Container className="main-container">
        <h1>Acerca de</h1>
        <p>
            Esta es una pequeña aplicación web creada para poner en práctica conocimientos adquiridos en React.
        </p>
        <p>
            Toda la información aquí mostrada ha sido procesada con datos reales que se obtuvieron del sitio oficial de la <a href="https://www.jps.go.cr/" target="_blank" rel="noreferrer">Junta de Protección Social.</a>
        </p>
        <p>
            Entre los conocimientos que pusieron en práctica está desde lo más báscio, creación de componentes, hasta el manejo de estados de los componentes, consumo de una fake API rest, y la libreria React-Bootstrap.
        </p>
        <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </Container>
)

export default AcercaDe