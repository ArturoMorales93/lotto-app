import React from 'react'
import { Table } from 'react-bootstrap'
import withLoader from '../HOC/withLoader'

const TableGrid = ({ numerosTop }) => (
    <Table striped bordered hover size="sm" variant="dark" responsive>
        <caption>Números más frecuentes con la cantidad de veces que han salido.</caption>
        <tbody>
            <tr>
                <th className="text-center">Números</th>
                {
                    numerosTop.map(n => (
                        <td key={n.num}>{n.num}</td>
                    ))
                }
            </tr>
            <tr>
                <th className="text-center">Cantidad</th>
                {
                    numerosTop.map(n => (
                        <td key={n.num}>{n.cant}</td>
                    ))
                }
            </tr>
        </tbody>
    </Table>
)

export default withLoader("numerosTop")(TableGrid)