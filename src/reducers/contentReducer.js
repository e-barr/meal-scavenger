import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    ADD_TO_RESTAURANTS_OBJECT
} from '../actions/types'

const defaultState = {
    isSettingAddress: true,
    startAddress: null,
    selectedFoods: [],
    restaurants: {}
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
        case ADD_TO_RESTAURANTS_OBJECT:
            console.log(action.payload)
            return {
                ...state
            }
        case CLEAR_ALL:
            return { ...defaultState }
        default:
            return state;
    }
}