import { ADD_TO_COUNTER, DELETE_FROM_COUNTER, GET_CANT_NUMBERS_LIST, GET_TOP_NUMBERS_LIST } from "./actions";
import axios from "axios";

const addToCounter = id => ({
    type: ADD_TO_COUNTER,
    id
})

const deleteFromCounter = id => ({
    type: DELETE_FROM_COUNTER,
    id
})

const getTopNumbersList = () => dispatch => {
    axios.get("https://my-json-server.typicode.com/ArturoMorales93/fake-API/db")
    .then(response => {
        dispatch({
            type: GET_TOP_NUMBERS_LIST,
            ultimoSorteo: response.data.ultimoSorteo,
            numerosTop: response.data.numerosTop
        })
    })
}

const getCantNumbersList = () => dispatch => {
    axios.get("https://60beaa236035840017c177fd.mockapi.io/numeros/1")
    .then(response => {
        dispatch({
            type: GET_CANT_NUMBERS_LIST,
            numeros: response.data
        })
    })
}


export { addToCounter, deleteFromCounter, getTopNumbersList, getCantNumbersList }