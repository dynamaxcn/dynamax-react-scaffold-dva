/**
 * Created by guanzhenxing on 2017-03-18.
 */
import CryptoJS from 'crypto-js'

import datetime from './datetime'
import storage from './storage'

const tokensKey = 'AUTH-TOKENS'
const userKey = 'AUTH-USER'

function randomCode() {
    let code = ''
    let codeLength = 8// 验证码的长度
    let chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // 所有候选组成验证码的字符，当然也可以用中文的

    for (let i = 0; i < codeLength; i++) {
        let charIndex = Math.floor(Math.random() * 36)
        code += chars[charIndex]
    }
    return code
}

export default class AuthUtil {
    /**
     * 判断是否登录
     * @returns {boolean}
     */
    isLogin() {
        return !!this.getTokens()
    }

    /**
     * 获得tokens
     * @param key
     * @returns {*}
     */
    getTokens(key) {
        var tokens = storage.get(tokensKey)
        if (tokens) {
            if (datetime(tokens['expires_at']).toNumber() <= datetime().toNumber()) { // 失效判断
                this.setTokens(tokens = null)
            }
        }
        if (key && tokens) {
            return tokens[key]
        }
        return tokens
    }

    /**
     * 设置或清除 tokens
     * @param {object} tokens token值
     */
    setTokens(tokens) {
        if (tokens === null) {
            storage.remove(tokensKey)
        } else {
            tokens.diff = new Date(this.getTokens('server_time')) - new Date()
            storage.set(tokensKey, tokens)
        }
    }

    /**
     * 获得用户信息
     * @returns {*}
     */
    getUser() {
        let user = storage.get(userKey)
        return user
    }

    /**
     * 设置用户信息
     * @param user
     */
    setUser(user) {
        if (user === null) {
            storage.remove(userKey)
        } else {
            storage.set(userKey, user)
        }
    }

    /**
     * 获得访问认证
     * @param method
     * @param url
     * @param host
     * @returns {string}
     */
    getAuthorization(method, url, host) {
        method = method.toUpperCase()
        url = encodeURI(url)
        let accessToken = this.getTokens('access_token')
        let macKey = this.getTokens('mac_key')

        let nonce = new Date().getTime() + ':' + randomCode()

        let _getMac = () => {
            let path
            let pos = url.indexOf('://')
            if (pos > 0) {
                path = url.substring(pos + 3)
                pos = path.indexOf('/')
                host = path.substr(0, pos)
                path = path.substring(pos)
            } else {
                path = url
            }
            let requestContent = nonce + '\n' + method + '\n' + path + '\n' + host + '\n'
            let hash = CryptoJS.HmacSHA256(requestContent, macKey)
            let mac = hash.toString(CryptoJS.enc.Base64)
            return mac
        }
        let mac = _getMac()

        let strAuth = `MAC id="${accessToken}",nonce="${nonce}",mac="${mac}"`
        return strAuth
    }

    /**
     * 销毁
     */
    destroy() {
        this.setTokens(null)
    }

}
