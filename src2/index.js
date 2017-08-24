import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import routes from './routes'
import configureStore from './store/configureStore'
import DevTools from './containers/DevTools'
import { isProdEnv } from './utils/general-util'
import './assets/style/index.styl'

// import './global-styles'

const store = configureStore()

/**
 * 页面主入口
 */
render(
    <Provider store={store}>
        <div>
            {routes(store)
            }
            {isProdEnv() ? null : <DevTools />}
        </div>
    </Provider>,
    document.getElementById('root')
)
