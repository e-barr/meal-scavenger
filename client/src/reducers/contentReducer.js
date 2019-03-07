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
            const updatedRestaurants = [...state.restaurants, action.payload]
            return {
                ...state, updatedRestaurants
            }
        case CLEAR_ALL:
            return { ...defaultState }
        default:
            return state;
    }
}