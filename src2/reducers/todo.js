import _ from 'lodash'

const initialState = {
    text: ''
}

function todo(state = initialState, action) {
    switch (action.type) {
        case 'ON_REQUEST':
            console.log('>>>>>>>>>>>ON_REQUEST')
            return _.assign(state, { text: action.payload })
        case 'ON_SUCCESS':
            console.log('>>>>>>>>>>>ON_SUCCESS')
            return _.assign(state, { text: action.payload })
        case 'ON_FAILURE':
            console.log('>>>>>>>>>>>ON_FAILURE')
            return _.assign(state, { text: action.payload })
        default:
            return state
    }
}

export default todo
