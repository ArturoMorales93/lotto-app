import React, { Component } from 'react'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'
import withLoader from '../HOC/withLoader'

class FormConsult extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: "",
        }

        this.showResult = this.showResult.bind(this)
        this.hideResult = this.hideResult.bind(this)
    }

    showResult() {
        const num = parseInt(document.getElementById("num").value)
        var component

        isNaN(num) || (num < 0 || num > 40)
            ? component = <Alert variant="danger">Debe ingresar un número entre el 0 y el 40</Alert>
            : component = <Alert variant="success">{
                `El ${num} ha salido ${this.props.numeros.data.numeros[num].cant} veces`
            }</Alert>

        this.setState({
            result: component
        })
    }

    hideResult() {
        this.setState({
            result: "",
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
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Group>
                                <Form.Label>Número</Form.Label>
                                <Form.Control type="number" placeholder="Ingrese el número" id="num" />
                                <Form.Text className="text-muted">
                                    Solo números del 0 al 40.
                                </Form.Text>
                            </Form.Group>
                            <div className="buttons-group">
                                <Button variant="primary" onClick={this.showResult}>
                                    Consulta
                                </Button>
                                <Button variant="secondary" onClick={this.hideResult} type="reset">
                                    Limpia
                                </Button>
                            </div>
                        </Form>
                    </Col>
                    <Col>
                        <div className="form-result">
                            <span>Resultado</span>
                            <p>
                                {this.state.result}
                            </p>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }

}

export default withLoader("numeros")(FormConsult)