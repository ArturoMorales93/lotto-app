import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Ball from '../Atoms/Ball'
import axios from 'axios'

const BallsGrid = () => {

    const [ultimoSorteno, setUltimoSorteo] = useState([])
    const [numeros, setNumeros] = useState([])

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/ArturoMorales93/db-json/ultimoSorteo")
            .then(response => setUltimoSorteo(response.data))
    }, [])

    useEffect(() => {
        axios.get("https://my-json-server.typicode.com/ArturoMorales93/db-json/numeros")
            .then(response => setNumeros(response.data))
    }, [])

    return (
        <>
            <Col><p className="bigger-text">Actualizado con el sorteo {ultimoSorteno.id}</p></Col>
            <Row md={5} className="balls-row">
                {
                    numeros.map(n => (
                        <Col>
                            <Ball id={n.num} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default BallsGrid