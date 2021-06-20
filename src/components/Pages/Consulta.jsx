import React from 'react'
import { Container } from 'react-bootstrap'
import FormConsult from '../Templates/FormConsult'
import { connect } from 'react-redux'

const Consulta = ({ numeros }) => (
    <Container className="main-container">
        <h1>Consulta de números</h1>
        <FormConsult numeros={numeros} />
    </Container>
)


const mapStateToProps = state => ({
    numeros: state.sorteosReducer.numeros
})

export default connect(mapStateToProps, {})(Consulta)