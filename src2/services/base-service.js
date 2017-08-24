/**
 * Created by guanzhenxing on 2017/8/3.
 */

import * as fetchUtil from '../utils/fetch-util'

class BaseService {
    /**
     * 请求操作
     * @param url 请求的地址
     * @param body 请求的body
     * @param method 请求方法
     * @param isWithAuthToken 是否包含验证
     * @returns {*}
     */
    doRequest(url, body, method, isWithAuthToken) {
        return fetchUtil.request(url, body, method, null, isWithAuthToken)
    }

    /**
     * GET请求
     * @param url
     * @returns {*}
     */
    doGet(url) {
        return fetchUtil.doGet(url)
    }

    /**
     * POST请求
     * @param url
     * @param data
     * @returns {*}
     */
    doPost(url, data) {
        return fetchUtil.doPost(url, data)
    }

    /**
     * PUT请求
     * @param url
     * @param data
     * @returns {*}
     */
    doPut(url, data) {
        return fetchUtil.doPut(url, data)
    }

    /**
     * DELETE请求
     * @param url
     * @returns {*}
     */
    doDelete(url) {
        return fetchUtil.doDelete(url)
    }

    /**
     * PATCH请求
     * @param url
     * @param data
     * @returns {*}
     */
    doPatch(url, data) {
        return fetchUtil.doPatch(url, data)
    }
}
export default BaseService
