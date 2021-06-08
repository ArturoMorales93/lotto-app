import React from 'react'
import { Table } from 'react-bootstrap'
import withLoader from '../HOC/withLoader'

const TableGrid = ({numerosTop}) => {

    return (
        <Table striped bordered hover size="sm" variant="dark" responsive>
            <caption>Números más frecuentes con la cantidad de veces que han salido.</caption>
            <tbody>
                <tr>
                    <th className="text-center">Números</th>
                    {
                        numerosTop.data.map(n => (
                            <th>{n.num}</th>
                        ))
                    }
                </tr>
                <tr>
                    <th className="text-center">Cantidad</th>
                    {
                        numerosTop.data.map(n => (
                            <th>{n.cant}</th>
                        ))
                    }
                </tr>
            </tbody>
        </Table>
    )

}

export default withLoader("numerosTop")(TableGrid)