import {
    SET_START_ADDRESS,
    CLEAR_ALL
} from './types'

export const setStartAddress = ({ formatted_address, id, place_id }) => {
    return {
        type: SET_START_ADDRESS,
        payload: { formatted_address, id, place_id }
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}