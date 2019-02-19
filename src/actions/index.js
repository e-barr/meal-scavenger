import {
    SET_ADDRESS,
    CLEAR_ALL
} from './types'

export const setAddress = ({ formatted_address, id, place_id }) => {
    console.log('setAddress in actions entered')
    return {
        type: SET_ADDRESS,
        payload: { formatted_address, id, place_id }
    }
}

export const clearAll = () => {
    return {
        type: CLEAR_ALL
    }
}

// setStartAddress = ({ formatted_address, id, place_id }) => {
//     this.setState({
//       startAddress: formatted_address,
//       startAddressId: id,
//       startAddressPlaceId: place_id 
//     })
//   }