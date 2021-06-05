import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Ball from '../Atoms/Ball'
import Ball2 from '../Atoms/Ball2'

const Home = () => (
    <Container className="text-center">
        <Row className="margin-bottom">
            <Col><h1>Números más frecuentes del Lotto</h1></Col>
        </Row>
        <Row className="margin-bottom">
            <Col><p>Actualizado con el sorteo xxxx</p></Col>
        </Row>
        <Row>
            <Col><Ball></Ball></Col>
            <Col><Ball></Ball></Col>
            <Col><Ball></Ball></Col>
            <Col><Ball></Ball></Col>
            <Col><Ball></Ball></Col>
        </Row>
        <Row>
            <Col><Ball2></Ball2></Col>
            <Col><Ball2></Ball2></Col>
            <Col><Ball2></Ball2></Col>
            <Col><Ball2></Ball2></Col>
            <Col><Ball2></Ball2></Col>
        </Row>
        <Row>
            <Col className="footer">
                <span>
                    Hecho por Arturo Morales utilizando React <br/>
                    Repositorio en GitHub <a href="/">aquí.</a>
                </span>
            </Col>
        </Row>
    </Container>
)

export default Home