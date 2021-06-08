import React from 'react'
import { Container } from 'react-bootstrap'
import BallsGrid from '../Molecules/BallsGrid'
import useAxios from '../CustomHooks/useAxios'

const Home = () => {

    /* 
        Se intento optimizar la consulta a una sola, pero da un error al
        momento de acualizar el estado que aún desconosco
    */
    const ultimoSorteo = useAxios("https://my-json-server.typicode.com/ArturoMorales93/fake-API/ultimoSorteo/"
        , "")
    const numerosTop = useAxios("https://my-json-server.typicode.com/ArturoMorales93/fake-API/numerosTop/"
        , [])
        
    return (
        <Container className="text-center home-container main-container">
            <h1>Números más frecuentes del Lotto</h1>
            <BallsGrid ultimoSorteo={ultimoSorteo} numerosTop={numerosTop} />
        </Container>
    )
}

export default Home