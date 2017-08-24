/**
 * Created by guanzhenxing on 2017/8/3.
 */
import {connect} from 'react-redux'
import Login from '../../components/Login'
import {login, cleanLoginError, logout} from '../../actions/auth-action'

function mapStateToProps(state) {
    let error = state.auth.get('error')
    return {
        error: error
    }
}

function mapDispatchToProps(dispatch) {
    return {
        login: (user) => dispatch(login(user)),
        logout: () => dispatch(logout()),
        cleanError: () => dispatch(cleanLoginError())
    }
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login)
