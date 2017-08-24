import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'

import auth from './auth'
import todo from './todo'

const rootReducer = combineReducers({
    routing,
    auth,
    todo
})

export default rootReducer
