import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    FETCH_RESTAURANTS,
    FETCH_ONE_LIST_OF_RESTAURANTS,
    ADD_TO_RESTAURANTS_OBJECT
} from './types'

const yelp_api_key = `${process.env.REACT_APP_YELP}`

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

export const setSelectedFoods = (foods) => {
    return {
        type: SET_SELECTED_FOODS,
        payload: foods
    }
}

export const fetchOneListOfRestaurants = (searchTerm, zipCode, idx) => async dispatch => {
    let resp = {}

    try {
        resp = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${zipCode}&limit=10&sort_by=rating`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${yelp_api_key}`}
        })
    } catch (error) {
        resp = { error: error.message }
    }

    console.log('resp is:')
    console.log(resp)

    if (!resp.error) {
        resp = resp.json()
    } else {
        resp = { error: "No JSON received." }
    }

    dispatch({
        type: ADD_TO_RESTAURANTS_OBJECT,
        payload: { idx, resp }
    })
    
}

export const fetchListOfAllRestaurants = (listOfRestaurants) => async dispatch => {

}