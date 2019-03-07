import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    SET_ALL_RESTAURANTS,
    ADD_ONE_FOOD_RESTAURANT
} from './types'

const yelp_api_key = `${process.env.REACT_APP_YELP}`

export const setStartAddress = ({ formatted_address, id, place_id, address_components }) => {
    const splitAddr = formatted_address.split(" ")
    const zipCode = splitAddr[splitAddr.length - 2].slice(0, -1)
    return {
        type: SET_START_ADDRESS,
        payload: { formatted_address, id, place_id, zipCode }
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}

export const setSelectedFoods = (payload) => {
    return {
        type: SET_SELECTED_FOODS,
        payload
    }
}

export const fetchAndAddRestaurants = (listOfRestaurants, zipCode) => async dispatch => {
    let payload = {}
    let resp
    
    console.log('entered')
    listOfRestaurants.forEach((searchTerm, idx, zipCode) => async dispatch => {
        try {
            resp = await fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${searchTerm}&location=${zipCode}&limit=10&sort_by=rating`, {
                method: 'GET',
                headers: { Authorization: `Bearer ${yelp_api_key}`}
            })

            console.log(resp)
        } catch (error) {
            resp = { error: error.message }
        }

        dispatch({
            type: ADD_ONE_FOOD_RESTAURANT,
            payload: resp
        })
    })

    // dispatch({
    //     type: SET_ALL_RESTAURANTS,
    //     payload
    // })

}