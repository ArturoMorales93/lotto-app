import React from 'react'
import { Container } from 'react-bootstrap'
// import FormConsult from '../Templates/FormConsult'
import { connect } from 'react-redux'
import HookForm from '../Templates/HookForm'

const Consulta = ({ numeros }) => (
    <Container className="main-container">
        <h1>Consulta de números</h1>
        {/* <FormConsult numeros={numeros} /> */}
        <HookForm />
    </Container>
)


const mapStateToProps = state => ({
    numeros: state.sorteosReducer.numeros
})

export default connect(mapStateToProps, {})(Consulta)