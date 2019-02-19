import {
    SET_ADDRESS,
    CLEAR_ALL
} from '../actions'

const defaultState = {
    isSettingAddress: true,
    startAddress: null,
    startAddressId: null,
    startAddressPlaceId: null
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_ADDRESS:
            const isSettingAddress: !state.isSettingAddress
            return {
                ...state,
                isSettingAddress,
                startAddress: action.formatted_address,
                startAddressId: action.id,
                startAddressPlaceId: action.place_id
            }
        case CLEAR_ALL:
            return { ...defaultState }
        default:
            state;
    }
}