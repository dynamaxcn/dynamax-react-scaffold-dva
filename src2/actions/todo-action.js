// import {REQUEST} from '../store/middleware/redux-request'
// export const addTodo = (text) => {
//     return {
//         [REQUEST]: {
//             types: ['ON_REQUEST', 'ON_SUCCESS', 'ON_FAILURE'],
//             service: () => {
//                 // return Promise.resolve(text)
//                 return Promise.reject(new Error(text))
//             },
//             onSuccess: (response) => {
//                 return response
//             },
//             onFailure: (error) => {
//                 return error
//             },
//         }
//     }
// }

import RequestAction from '../utils/request-action'

export const addTodo = (text) => {
    let param = {
        requestType: 'ON_REQUEST',
        successType: 'ON_SUCCESS',
        failureType: 'ON_FAILURE',
        service: () => {
            return Promise.resolve(text)
        },
        onSuccess: (response) => {
            return response
        },
        onFailure: (error) => {
            return error
        }
    }
    return new RequestAction(param).build()
}
