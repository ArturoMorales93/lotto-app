import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Ball from '../Atoms/Ball'
import withLoader from '../HOC/withLoader'

const BallsGrid = ({ ultimoSorteo, numerosTop }) => (
    <>
        <Col><p className="bigger-text">Actualizado con el sorteo
            <span>
                n° {ultimoSorteo.data.id} del {ultimoSorteo.data.fecha}
            </span>
        </p></Col>
        <Row md={5} className="balls-row">
            {
                numerosTop.data.map(n => (
                    <Col key={n.num}>
                        <Ball id={n.num} />
                    </Col>
                ))
            }
        </Row>
    </>
)

export default withLoader("ultimoSorteo", "numerosTop")(BallsGrid)