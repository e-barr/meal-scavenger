import {
    SET_START_ADDRESS,
    CLEAR_ALL,
    SET_SELECTED_FOODS,
    SET_ALL_RESTAURANTS,
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

    debugger;
    listOfRestaurants.forEach((searchTerm, idx) => {
        console.log('enetereds')
        let body = {
            "term": searchTerm,
            "key": yelp_api_key,
            idx,
            "zip": zipCode
        }

        fetch('http://localhost:5000/api/', {
            method: 'GET',
            body
        }).then(res => {
            dispatch({
                type: ADD_ONE_FOOD_RESTAURANT,
                payload: { [idx]: res.data.businesses }
            })
        })
    })

}