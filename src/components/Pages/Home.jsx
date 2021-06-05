import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import BallsGrid from '../Molecules/BallsGrid'

const Home = () => (
    <Container className="text-center home-container main-container">
        <Row>
            <Col><h1>Números más frecuentes del Lotto</h1></Col>
        </Row>
        <Row>
            <Col><p>Actualizado con el sorteo xxxx</p></Col>
        </Row>
        <BallsGrid />
    </Container>
)

export default Home