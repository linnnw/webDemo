import axios from 'axios'


export function request(config) {
    // const axios2 = axios.create({
    //     baseURL: 'https://httpbin.org',
    //     timeout: 5000
    // })
    // axios2({url: config.url}).then(res => {
    //     config.success(res)
    // }).catch(err => {
    //     config.error(err)
    // })

    const axios2 = axios.create({      /*创建出来axios方法是promise的*/
        baseURL: 'https://httpbin.org',
        timeout: 5000
    })
    return axios2(config)      /*直接返回axios2拿到后直接调用.then来返回值*/
}