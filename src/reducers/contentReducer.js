import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS
} from '../actions/types'

const defaultState = {
    isSettingAddress: true,
    startAddress: null,
    selectedFoods: []
}

export default (state = defaultState, action) => {
    switch(action.type) {
        case SET_START_ADDRESS:
            const startAddress = action.payload
            const isSettingAddress = !state.isSettingAddress
            return {
                ...state,
                isSettingAddress,
                startAddress,
            }
        case SET_SELECTED_FOODS:
            const selectedFoods = Object.values(action.payload)
            return {
                ...state, selectedFoods
            }
        case CLEAR_ALL:
            return { ...defaultState }
        default:
            return state;
    }
}