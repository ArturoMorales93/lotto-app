import React, { useState } from 'react'
import { Row, Col, Form, Button, Alert } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

const HookForm = ({ numeros }) => {

    const [data, setData] = useState("")
    const { register, formState: { errors }, handleSubmit } = useForm()
    const onSubmit = (data, e) => {
        setData(data)
        e.target.reset()
    }

    return (
        <>
            <Row>
                <Col>
                    <p>Consulte un número para saber la cantidad de veces que ha caido.</p>
                </Col>
            </Row>
            <Row>
                <Col md={true}>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group controlId="num">
                            <Form.Label>Número</Form.Label>
                            <Form.Control placeholder="Nombre"
                                type="number"
                                {...register(
                                    "num",
                                    {
                                        required: {
                                            value: true,
                                            message: "Debe ingresar un número"
                                        },
                                        min: {
                                            value: 0,
                                            message: "Debe ser un número igual o mayor que 0"
                                        },
                                        max: {
                                            value: 40,
                                            message: "Debe ser un número igual o menor que 40"
                                        }
                                    }
                                )}
                            />
                            <Form.Text className="text-muted">
                                Los números de lotto van del 0 al 40.
                            </Form.Text>
                            {
                                errors.num &&
                                <Alert className="small" variant="danger">
                                    {errors.num.message}
                                </Alert>
                            }
                        </Form.Group>
                        <div className="buttons-group">
                            <Button variant="primary" type="submit">
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
                        {
                            data.num &&
                                <p>
                            <Alert variant="secondary">
                                {`El ${data.num} ha salido ${numeros[data.num].cant} veces`}
                            </Alert>
                                </p>
                        }
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default HookForm