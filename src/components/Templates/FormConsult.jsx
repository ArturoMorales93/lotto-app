import React, { Component } from 'react'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'
import withLoader from '../HOC/withLoader'

class FormConsult extends Component {

    constructor(props) {
        super(props)

        this.state = {
            result: "",
        }

        this.numInput = {}
        this.showResult = this.showResult.bind(this)
        this.hideResult = this.hideResult.bind(this)
        this.inputFocus = this.inputFocus.bind(this)
    }

    showResult(event) {
        event.preventDefault()

        const num = parseInt(this.numInput.value)
        const inputClassList = this.numInput.classList
        var component = <></>

        if (isNaN(num) || (num < 0 || num > 40)) {
            inputClassList.add("border-danger")
            component = <Alert variant="danger">Debe ingresar un número entre el 0 y el 40</Alert>
        } else {
            inputClassList.remove("border-danger")
            inputClassList.add("border-success")
            component = <Alert variant="success">{
                `El ${num} ha salido ${this.props.numeros.data.numeros[num].cant} veces`
            }</Alert>
            this.numInput.value = ""
        }

        this.setState({
            result: component
        })
    }

    hideResult() {
        const inputClassList = this.numInput.classList
        inputClassList.remove("border-danger")
        inputClassList.remove("border-success")

        this.setState({
            result: ""
        })
    }

    inputFocus(){
        const inputClassList = this.numInput.classList
        inputClassList.remove("border-danger")
        inputClassList.remove("border-success")
    }

    componentDidMount() {
        // this.setState({
        //     numInput: document.getElementById("numInput")
        // })
        this.numInput = document.getElementById("numInput")
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
                        <Form noValidate onSubmit={this.showResult}>
                            <Form.Group controlId="numInput" onFocus={this.inputFocus}>
                                <Form.Label>Número</Form.Label>
                                <Form.Control className="border" type="number" placeholder="Ingrese el número" />
                                <Form.Text className="text-muted">
                                    Solo números del 0 al 40.
                                </Form.Text>
                            </Form.Group>
                            <div className="buttons-group">
                                <Button variant="primary" type="submit">
                                    Consulta
                                </Button>
                                <Button variant="secondary" type="reset" onClick={this.hideResult}>
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