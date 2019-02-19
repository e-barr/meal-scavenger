import { SET_ADDRESS } from './types'

export const setAddress = (addressInfo) => {
    console.log('setAddress in actions entered')
    console.log(`address is: ${address}`)
    return {
        type: SET_ADDRESS,
        payload: addressInfo
    }
}