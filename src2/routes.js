import React from 'react'
import {hashHistory, Router, Route, IndexRoute} from 'react-router'
import {syncHistoryWithStore} from 'react-router-redux'

import App from './containers/App'
import Login from './containers/Login'
import Todo from './containers/Todo'

function authorize(nextState, replaceState, callback) {
    // replaceState('/login')
    callback()
}

export default (store) => {
    const history = syncHistoryWithStore(hashHistory, store)
    return (
        <Router history={history}>
            <Route path='/login' component={Login} />
            <Route path='/' component={App} onEnter={authorize}>
                <IndexRoute path='/todo' component={Todo} />
            </Route>
        </Router>
    )
}
