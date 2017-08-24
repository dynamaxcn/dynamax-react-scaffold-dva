import BaseService from './base-service'

class UCService extends BaseService {
    login(user) {
        return Promise.resolve(user).then(res => {
            return {
                tokens: 'XXXX-XXXX-XXXX-XXXX',
                userInfo: res
            }
        })
    }
}

export default UCService
