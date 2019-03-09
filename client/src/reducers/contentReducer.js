import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    SET_ALL_RESTAURANTS,
    ADD_ONE_FOOD_RESTAURANT,
    NO_CHANGE
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
            console.log(action.payload)
            const currentRestaurants = state.restaurants
            const key = Object.keys(action.payload)[0]
            const value = action.payload[key]
            currentRestaurants[key] = value
            console.log(`currentRestaurants:`)
            console.log(currentRestaurants)
            return {
                ...state, restaurants: currentRestaurants
            }
        case NO_CHANGE:
            return state
        case CLEAR_ALL:
            return { ...defaultState }
        default:
            return state;
    }
}