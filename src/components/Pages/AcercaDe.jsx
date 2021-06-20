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
            Toda la información aquí mostrada ha sido procesada, por medio de una fake API, utilizando datos reales que se obtuvieron del sitio oficial de la <a href="https://www.jps.go.cr/" target="_blank" rel="noreferrer">Junta de Protección Social</a>.
            Los datos procesados han sido recogidos desde el sorteo 2074 del 21 de octubre del 2020 hasta la fecha.
            De igual manera, solamente se han tomado en cuenta los datos del sorteo principal, dejando así por fuera el Lotto Revancha.
        </p>
        <p>
            Entre los conocimientos que se pusieron en práctica, destacan la creación de componentes; de clase y funcionales, el manejo de estados de los componentes, uso de HOCs y Hooks, consumo de una fake API rest, y la libreria React-Bootstrap.
        </p>
        <p>
            La arquitectura implementada para el manejo de los componentes fue <a href="https://bradfrost.com/blog/post/atomic-web-design/" target="_blank" rel="noreferrer">Atomic Design</a>. De igual manera,
            para manipular el estado global de la aplicación, se implementó la librería <a href="https://es.redux.js.org/" target="_blank" rel="noreferrer">Redux</a>.
        </p>
        <div className="logo-container">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
    </Container>
)

export default AcercaDe