/**
 * 处理API请求中间件。
 * 使用样例：
 *function exampleAction() {
 *   return {
 *       [REQUEST]: {
 *           types: ['ON_REQUEST', 'ON_SUCCESS', 'ON_FAILURE'],
 *           service: () => { return new Promise.resolve(168) },
 *           onSuccess: (response) => { return response },
 *           onFailure: (error) => { return error },
 *      }
 *   }
 *}
 *
 * 使用redux-thunk中间件时候，配合该中间件使用
 * Created by guanzhenxing on 2017-01-25.
 */
import _ from 'lodash'
export const REQUEST = Symbol('request')

function createAPIRequester() {
    return store => next => action => {
        const callAPI = action[REQUEST]
        if (typeof callAPI === 'undefined') {
            return next(action)
        }

        const { types, service, onSuccess, onFailure } = callAPI

        if (typeof service !== 'function') {
            throw new Error('Expected a function as service.')
        }
        if (!Array.isArray(types) || types.length !== 3) {
            throw new Error('Expected an array of three action types.')
        }
        if (!types.every(type => typeof type === 'string')) {
            throw new Error('Expected action types to be strings.')
        }

        const actionWith = data => {
            const finalAction = _.assign({}, action, data)
            delete finalAction[REQUEST]
            return finalAction
        }

        const [requestType, successType, failureType] = types
        next(actionWith({ type: requestType }))

        return service().then(
            payload => {
                onSuccess && onSuccess(payload)
                next(actionWith({
                    payload,
                    type: successType
                }))
            },
            error => {
                onFailure && onFailure(error)
                next(actionWith({
                    type: failureType,
                    error: error.message || 'Something bad happened'
                }))
            }
        )
    }
}

const apiRequester = createAPIRequester()
export default apiRequester
