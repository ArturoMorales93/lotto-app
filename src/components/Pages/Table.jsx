import React from 'react'
import { Container } from 'react-bootstrap'
import TableGrid from '../Molecules/TableGrid'
import useAxios from '../CustomHooks/useAxios'

const Table = () => {
    const numerosTop = useAxios("https://my-json-server.typicode.com/ArturoMorales93/fake-API/numerosTop"
        , [])

    return (
        <Container className="main-container">
            <h1>Tabla de resultados</h1>
            <TableGrid numerosTop={numerosTop} />
        </Container>
    )
}

export default Table