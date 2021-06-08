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
            Toda la información aquí mostrada ha sido procesada con datos reales que se obtuvieron del sitio oficial de la <a href="https://www.jps.go.cr/" target="_blank" rel="noreferrer">Junta de Protección Social</a>.
            Los datos procesados han sido recogidos desde el sorteo 2074 del 21 de octubre del 2020 hasta la fecha.
            De igual manera, solamente se han tomado en cuenta los datos del sorteo principal, dejando así por fuera el Lotto Revancha.
        </p>
        <p>
            Entre los conocimientos aún básicos que se pusieron en práctica, destacan la creación de componentes; de clase y funcionales, el manejo de estados de los componentes, uso de HOCs y Hooks, consumo de una fake API rest, y la libreria React-Bootstrap.
        </p>
        <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </Container>
)

export default AcercaDe