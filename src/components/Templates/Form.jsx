import React, { Component } from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'

class FormConsult extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: ""
        }

        this.showResult = this.showResult.bind(this)
    }

    showResult() {
        const num = document.getElementById("num")

        this.setState({
            result: `El ${num.value} ha caido`
        })
    }

    componentDidMount() {
    }

    render() {
        return (
            <>
                <Row>
                    <Col>
                        <p>Consulte un número para saber la cantidad de veces que ha caido.</p>
                    </Col>
                </Row>
                <Row>
                    <Col md={true}>
                        <Form id="form">
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="number" placeholder="Ingrese el número" id="num" />
                                <Form.Text className="text-muted">
                                    Solo números del 0 al 40.
                                </Form.Text>
                            </Form.Group>
                            <Button variant="primary" onClick={this.showResult} block>
                                Consulta
                            </Button>
                        </Form>
                    </Col>
                    <Col>
                        <div className="form-result">
                            <span>Resultado</span>
                            <p>{this.state.result}</p>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }

}

export default FormConsult