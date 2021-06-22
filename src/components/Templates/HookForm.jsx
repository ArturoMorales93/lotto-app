import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

const HookForm = () => (
    <>
        <Row>
            <Col>
                <p>Consulte un número para saber la cantidad de veces que ha caido.</p>
            </Col>
        </Row>
        <Row>
            <Col md={true}>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            Los números de lotto van del 0 al 40.
                        </Form.Text>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <div className="buttons-group">
                        <Button variant="secondary" type="submit">
                            Consulte
                        </Button>
                        <Button variant="outline-secondary" type="reset">
                            Limpie
                        </Button>
                    </div>
                </Form>
            </Col>
            <Col>
                <div className="form-result">
                    <span>Resultado</span>
                </div>
            </Col>
        </Row>
    </>
)

export default HookForm