import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Ball from '../Atoms/Ball'
import Ball2 from '../Atoms/Ball2'

const BallsGrid = () => (
    <>
        <Row className="balls-row">
            <Col><Ball /></Col>
            <Col><Ball /></Col>
            <Col><Ball /></Col>
            <Col><Ball /></Col>
            <Col><Ball /></Col>
        </Row>
        <Row className="balls-row">
            <Col><Ball2 /></Col>
            <Col><Ball2 /></Col>
            <Col><Ball2 /></Col>
            <Col><Ball2 /></Col>
            <Col><Ball2 /></Col>
        </Row>
    </>
)

export default BallsGrid