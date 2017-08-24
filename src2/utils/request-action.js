import { REQUEST } from '../store/middleware/redux-request'

class RequestAction {
    /**
     * 构造器
     * @param requestType 请求的type
     * @param successType 成功的type
     * @param failureType 失败的type
     * @param service   处理方法
     * @param onSuccess 成功时候的处理
     * @param onFailure 失败时候的处理
     */
    constructor({ requestType, successType, failureType, service, onSuccess, onFailure }) {
        this.types = [requestType, successType, failureType]
        this.service = service
        this.onSuccess = onSuccess
        this.onFailure = onFailure
    }

    /**
     * 构建。构建一个Action
     * @returns {{}}
     */
    build() {
        return {
            [REQUEST]: {
                types: this.types,
                service: this.service,
                onSuccess: this.onSuccess,
                onFailure: this.onFailure
            }
        }
    }
}

export default RequestAction
