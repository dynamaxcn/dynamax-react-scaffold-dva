import { createStore, applyMiddleware, compose } from 'redux'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'
import thunkMiddleware from 'redux-thunk'
import requestMiddleware from './middleware/redux-request'

import { isProdEnv, isDevEnv } from '../utils/general-util'
import DevTools from '../containers/DevTools'

/**
 * store增强
 */
const storeEnhancer = () => {
    // 定义创建Store时所需要的中间件
    const middleWares = [thunkMiddleware, requestMiddleware]
    if (isDevEnv()) {
        middleWares.concat(createLogger())
    }
    const enhancers = [
        applyMiddleware(...middleWares)
    ]
    return isDevEnv() ? compose(...enhancers, DevTools.instrument()) : compose(...enhancers)
}

/**
 * 给开发环境中的webpack替换掉reducers使用
 */
const webpackHotReplaceReducers = store => {
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers').default
            store.replaceReducer(nextRootReducer)
        })
    }
}

/**
 * 配置store
 */
const configureStore = (initialState = {}) => {
    const store = createStore(
        rootReducer,
        initialState,
        storeEnhancer()
    )

    if (!isProdEnv()) {  // 开发环境
        webpackHotReplaceReducers(store)
    }

    return store
}
export default configureStore
