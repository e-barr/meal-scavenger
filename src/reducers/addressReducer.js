import { SET_ADDRESS } from '../actions/types'

const defaultState = {
    address: null
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_ADDRESS:
            const address = action.payload
            return { ...state, address }
        default:
            return state
    }
}