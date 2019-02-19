import {
    SET_ADDRESS
} from '../actions'

const defaultState = {
    isSettingAddress: true,
    startAddress: '',
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
        default:
            state;
    }
}