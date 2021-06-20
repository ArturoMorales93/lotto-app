import { applyMiddleware, combineReducers, createStore } from 'redux'
import { ADD_TO_COUNTER, DELETE_FROM_COUNTER, GET_CANT_NUMBERS_LIST, GET_TOP_NUMBERS_LIST } from './actions'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

const initialCounter = {
    balls: []
}

const initialSorteos = ({
    ultimoSorteo: [],
    numerosTop: [],
    numeros: []
})

const counterReducer = (state = initialCounter, { type, id }) => {
    if (type === ADD_TO_COUNTER) {
        if (state.balls.find(a => a === id)) return state
        return {
            ...state,
            balls: state.balls.concat(id)
        }
    }

    if (type === DELETE_FROM_COUNTER) {
        return {
            ...state,
            balls: state.balls.filter(a => a !== id)
        }
    }

    return state
}

const sorteosReducer = (state = initialSorteos, { type, ultimoSorteo, numerosTop, numeros }) => {
    if (type === GET_TOP_NUMBERS_LIST) {
        return {
            ...state,
            ultimoSorteo,
            numerosTop
        }
    }

    if (type === GET_CANT_NUMBERS_LIST) {
        return {
            ...state,
            numeros
        }
    }

    return state
}

export default createStore(combineReducers({ counterReducer, sorteosReducer }), composeWithDevTools(applyMiddleware(thunk)))