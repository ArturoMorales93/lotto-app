import React, { useState, useEffect } from 'react'
import { Row, Col } from 'react-bootstrap'
import Ball from '../Atoms/Ball'
import axios from 'axios'

const BallsGrid = () => {

    const [state, setState] = useState([])
    
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setState(response.data)
            })
    }, [])

    return (
        <>
            <Row md={5} className="balls-row">
                {
                    state.map(n => (
                        <Col>
                            <Ball id={n.id} />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default BallsGrid