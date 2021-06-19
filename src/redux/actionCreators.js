import { ADD_TO_COUNTER, DELETE_FROM_COUNTER } from "./actions";

const addToCounter = id => ({
    type: ADD_TO_COUNTER,
    id
})

const deleteFromCounter = id => ({
    type: DELETE_FROM_COUNTER,
    id
})

export {addToCounter, deleteFromCounter}