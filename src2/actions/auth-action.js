import * as ActionTypes from '../constants/action-types'
import { hashHistory } from 'react-router'
import UCService from '../services/uc-service'

export const login = (user) => {
    return dispatch => {
        dispatch({
            type: ActionTypes.LOGIN_FETCH
        })
        return new UCService().login(user).then(res => {
            dispatch({
                type: ActionTypes.LOGIN_SUCCESS,
                payload: res
            })
            dispatch(hashHistory.push('/'))
        }).catch(error => {
            dispatch({
                type: ActionTypes.LOGIN_ERROR,
                error: error
            })
        })
    }
}

export const logout = () => {
    return {
        type: ActionTypes.LOGOUT
    }
}

export const cleanLoginError = () => {
    return {
        type: ActionTypes.LOGIN_CLEAN_ERROR
    }
}
