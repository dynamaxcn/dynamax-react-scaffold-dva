import React, {Component} from 'react'
import PropTypes from 'prop-types'

// noinspection JSUnresolvedVariable
import styles from './index.css'

class App extends Component {
    static propTypes = {
        children: PropTypes.node
    }

    render() {
        const {children} = this.props
        return (
            <div>
                <div className={styles['header']}>
                    <h1>City Gallery</h1>
                </div>
                <div className={styles['nav']}>
                    <button>INCREMENT</button>
                    <button>DECREMENT</button>
                    <div ref='content' />
                </div>
                <div className={styles['section']}>
                    {children}
                </div>
                <div className={styles['footer']}>
                    Copyright dynamaxcn.com
                </div>
            </div>
        )
    }
}

export default App
