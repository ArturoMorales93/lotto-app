import React from 'react'
import { Container } from 'react-bootstrap'
import TableGrid from '../Molecules/TableGrid'
import { connect } from 'react-redux'

const Table = ({ numerosTop }) => (
    <Container className="main-container">
        <h1>Tabla de resultados</h1>
        <TableGrid numerosTop={numerosTop} />
    </Container>
)

const mapStateToProps = state => ({
    numerosTop: state.sorteosReducer.numerosTop
})

export default connect(mapStateToProps, {})(Table)