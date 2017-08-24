/**
 * Created by guanzhenxing on 2017/8/3.
 */
import {fromJS} from 'immutable'

import {
    LOGIN_FETCH,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    LOGIN_CLEAN_ERROR,
    LOGOUT
} from '../constants/action-types'
import AuthUtil from '../utils/auth-util'

const initialState = fromJS({
    loading: false,
    error: null,
    success: false,
    user: new AuthUtil().getUser() || {},
    token: new AuthUtil().getTokens('access_token') || {}
})

function auth(state = initialState, action) {
    switch (action.type) {
        case LOGIN_FETCH:
            return state.set('loading', true).set('error', null).set('success', false).set('user', {}).set('token', {})
        case LOGIN_SUCCESS:
            let user = action.payload['userInfo']
            let token = action.payload['tokens']

            console.log(user)
            console.log(token)

            return state.set('loading', false).set('error', null).set('success', true).set('user', user).set('token', token)
        case LOGIN_ERROR:
            return state.set('loading', false).set('error', action.error).set('success', false).set('user', {}).set('token', {})
        case LOGIN_CLEAN_ERROR:
            return state.set('loading', false).set('error', null).set('success', false).set('user', {}).set('token', {})
        case LOGOUT:
            return state.set('loading', false).set('error', null).set('success', false).set('user', {}).set('token', {})
        default:
            return state
    }
}

export default auth
