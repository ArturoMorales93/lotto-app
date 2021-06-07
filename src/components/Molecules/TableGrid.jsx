import React, { useState, useEffect } from 'react'
import { Table } from 'react-bootstrap'
import axios from 'axios'

const TableGrid = () => {

    const [numeros, setNumeros] = useState([])

    useEffect(() => (
        axios.get("https://my-json-server.typicode.com/ArturoMorales93/db-json/numeros")
            .then(response => setNumeros(response.data))
    ), [])

    return (
        <Table striped bordered hover size="sm" variant="dark" responsive>
            <caption>Números más frecuentes con la cantidad de veces que han salido.</caption>
            <tbody>
                <tr>
                    <th className="text-center">Números</th>
                    {
                        numeros.map(n => (
                            <th>{n.num}</th>
                        ))
                    }
                </tr>
                <tr>
                    <th className="text-center">Cantidad</th>
                    {
                        numeros.map(n => (
                            <th>{n.cant}</th>
                        ))
                    }
                </tr>
            </tbody>
        </Table>
    )

}

export default TableGrid