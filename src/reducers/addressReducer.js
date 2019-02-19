import { SET_START_ADDRESS } from '../actions/types'

const defaultState = {
    startAddress: null
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_START_ADDRESS:
            const startAddress = action.payload
            return { ...state, startAddress }
        default:
            return state
    }
}