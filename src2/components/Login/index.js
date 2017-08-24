/**
 * 登录界面
 * Created by guanzhenxing on 2017-03-17.
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './index.css'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isPasswordFieldFocus: false,
            isNameFieldFocus: false,
            userCheckStatus: false
        }
        props.logout()
    }

    componentDidMount() {

    }

    /**
     * 表单提交
     */
    handleFormSubmit(e) {
        e.preventDefault()
        this.setState({
            userCheckStatus: true,
            error: ''
        })
        if (this.state.username === '' || this.state.password === '') {
            return
        }
        let username = this.state.username
        this.props.login({
            username: (username),
            password: this.state.password
        })
    }

    /**
     * 用户名变化
     */
    handleUsernameChange(e) {
        this.setState({
            username: e.currentTarget.value.trim(),
            password: ''
        })
        if (this.props.error !== '') {
            this.props.cleanError()
        }
    }

    /**
     * 密码变化
     */
    handlePasswordChange(e) {
        this.setState({
            password: e.currentTarget.value.trim()
        })
        if (this.props.error !== '') {
            this.props.cleanError()
        }
    }

    /**
     * 密码输入框失去焦点
     */
    blurPasswordField() {
        this.setState({
            isPasswordFieldFocus: false
        })
    }

    /**
     * 密码输入框获得焦点
     */
    focusPasswordField() {
        this.setState({
            isPasswordFieldFocus: true
        })
    }

    render() {
        let errForUsername, errForPassword
        if (this.state.userCheckStatus) {
            errForUsername = this.state.username === '' ? '请输入用户名' : ''
            errForPassword = this.state.password === '' ? '请输入密码' : ''
        }

        return (
            <div className='page-login'>
                <div className={styles['loginBody']}>
                    <div className={styles['loginRoad']} />
                </div>
                <div className={styles['loginPanel']}>
                    <div
                        className={styles['loginHi'] + '   ' + (this.state.isPasswordFieldFocus ? styles['focusPassword'] : '')} />
                    <h1 className={styles['siteTitle']}>管理系统</h1>
                    <form noValidate onSubmit={this.handleFormSubmit.bind(this)} className={`${styles['login-form']}`}>
                        <div>
                            <div className={`${styles['login-form__input']}`}>
                                <span className={styles['login-form__label'] + ' ' + styles['login-form-name']} />
                                <input
                                    className={errForUsername ? `${styles['login-form__inputBox']} ${styles['login-form__inputBox--err']}` : `${styles['login-form__inputBox']}`}
                                    placeholder='用户名'
                                    type='text' value={this.state.username}
                                    onChange={this.handleUsernameChange.bind(this)} />

                                <span className={`${styles['login-form__err']}`}>{errForUsername}</span>
                            </div>
                            <div className={`${styles['login-form__input']}`}>
                                <span className={styles['login-form__label'] + ' ' + styles['login-form-pwd']} />
                                <input
                                    className={errForPassword ? `${styles['login-form__inputBox']} ${styles['login-form__inputBox--err']}` : `${styles['login-form__inputBox']}`}
                                    type='password' value={this.state.password}
                                    placeholder='密码'
                                    onFocus={this.focusPasswordField.bind(this)}
                                    onBlur={this.blurPasswordField.bind(this)}
                                    onChange={this.handlePasswordChange.bind(this)} />
                                <span className={`${styles['login-form__err']}`}>{errForPassword}</span>
                            </div>

                        </div>
                        <div className={styles['loginFormBtn']}>
                            <input type='submit' value='登录' className={`${styles['login-form__btn']}`} />
                        </div>
                        <div className={styles['error-login']}>
                            {this.props.error}
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

Login.propTypes = {
    login: PropTypes.func,  // 登录
    logout: PropTypes.func,  // 登出
    error: PropTypes.any,   // 登录失败
    cleanError: PropTypes.func  // 清理错误
}
Login.defaultProps = {}

export default Login
