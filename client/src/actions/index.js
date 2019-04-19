import axios from 'axios'
import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    ADD_ONE_FOOD_RESTAURANT,
    ONE_RESTAURANT_SELECTED,
} from './types'

const yelp_api_key = `${process.env.REACT_APP_YELP}`

export const setStartAddress = ({ formatted_address, id, place_id }) => {
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

export const fetchAndAddRestaurants = (listOfRestaurants, zipCode) => dispatch => {

    let res
    listOfRestaurants.forEach((searchTerm, idx) => {
        let body = {
            "term": `${searchTerm}`,
            "key": `${yelp_api_key}`,
            "zip": `${zipCode}`
        }
        
        try {
            axios.post('http://localhost:5000/api/', {...body }, { headers: { 'Content-Type': 'application/json' }})
            .then(resp => {
                res = resp.data.restaurants
                dispatch({
                    type: ADD_ONE_FOOD_RESTAURANT,
                    payload: { [idx]: res }
                })
            })
            .catch(err => res["err"] = err)
        } catch (error) {
        }
    })

}

export const oneRestaurantSelected = (payload) => {
    return {
        type: ONE_RESTAURANT_SELECTED,
        payload
    }
}