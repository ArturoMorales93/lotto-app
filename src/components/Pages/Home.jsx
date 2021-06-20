import React from 'react'
import { Container } from 'react-bootstrap'
import { connect } from 'react-redux'
import BallsGrid from '../Molecules/BallsGrid'

const Home = ({ultimoSorteo, numerosTop}) => (
    <Container className="text-center home-container main-container">
        <h1>Números más frecuentes del Lotto</h1>
        <BallsGrid ultimoSorteo={ultimoSorteo} numerosTop={numerosTop} />
    </Container>
)

const mapStateToProps = state => ({
    ultimoSorteo: state.sorteosReducer.ultimoSorteo,
    numerosTop: state.sorteosReducer.numerosTop
})

export default connect(mapStateToProps, {})(Home)