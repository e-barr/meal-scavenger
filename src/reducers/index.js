import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import contentReducer from './contentReducer'

export default combineReducers({
    content: contentReducer,
    form: formReducer
})