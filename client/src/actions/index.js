import axios from 'axios'
import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    ADD_ONE_FOOD_RESTAURANT
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
    console.log('entered')
    listOfRestaurants.forEach((searchTerm, idx) => {
        console.log('hi')
        let body = {
            "term": `${searchTerm}`,
            "key": `${yelp_api_key}`,
            "zip": `${zipCode}`
        }
        
        console.log(`searchTerm: ${searchTerm}, idx: ${idx}`)
        try {
            axios.get('http://localhost:5000/api/', { ...body }).then(resp => res = resp)
            debugger;
            
            // console.log(res)
            dispatch({
                type: ADD_ONE_FOOD_RESTAURANT,
                payload: { [idx]: res.data.businesses }
            })
        } catch (error) {
            console.log(`error: ${error}`)
        }
    })

}