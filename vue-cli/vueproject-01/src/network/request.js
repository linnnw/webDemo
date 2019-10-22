import axios from 'axios'

export function request(config) {
    const netwk = axios.create({
        baseURL: 'http://123.207.32.32:8000/api/v1',
        timeout: 100000
    })

    return netwk(config);
}