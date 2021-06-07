import React from 'react'
import { Container } from 'react-bootstrap'
import BallsGrid from '../Molecules/BallsGrid'

const Home = () => (
    <Container className="text-center home-container main-container">
        <h1>Números más frecuentes del Lotto</h1>
        <BallsGrid />
    </Container>
)

export default Home