import React from 'react'
import { Container } from 'react-bootstrap'
import FormConsult from '../Templates/FormConsult'
import useAxios from '../CustomHooks/useAxios'

const Consulta = () => {
    const data = useAxios("https://60beaa236035840017c177fd.mockapi.io/numeros/1"
    , [])
    // console.log(data.numeros)
    return (
        <Container className="main-container">
            <h1>Consulta de números</h1>
            <FormConsult numeros={data} />
        </Container>
    )
}

export default Consulta