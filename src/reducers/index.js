import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import addressReducer from './addressReducer'

export default combineReducers({
    address: addressReducer,
    form: formReducer
})