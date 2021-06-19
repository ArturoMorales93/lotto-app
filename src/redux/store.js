import { createStore } from 'redux'
import { ADD_TO_COUNTER, DELETE_FROM_COUNTER } from './actions'

const initialStore = {
    balls: []
}

const rootReducer = (state = initialStore, {type, id}) => {
    
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

export default createStore(rootReducer)