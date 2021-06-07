import React from 'react'
import { Container } from 'react-bootstrap'
import TableGrid from '../Molecules/TableGrid'

const Table = () => (
    <Container className="main-container">
        <h1>Tabla de resultados</h1>
        <TableGrid />
    </Container>
)

export default Table