import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    SET_ALL_RESTAURANTS,
    ADD_ONE_FOOD_RESTAURANT
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
            const selectedFoods = action.payload
            return {
                ...state, selectedFoods
            }
        case SET_ALL_RESTAURANTS:
            const restaurants = action.payload
            return {
                ...state,
                restaurants
            }
        case ADD_ONE_FOOD_RESTAURANT:
            const currentRestaurants = { ...state.restaurants }
            const key = Object.keys(action.payload)[0]
            const value = action.payload[key]
            currentRestaurants[key] = value
            return {
                ...state,
                restaurants: currentRestaurants
            }
        case CLEAR_ALL:
            return { ...defaultState }
        default:
            return state;
    }
}