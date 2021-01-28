const axios = require('axios')

let baseUrl = 'https://startmath-api2.nuwarobotics.cn/v1'

let token = 'your token'

const config = {
    headers: { Authorization: `Bearer ${token}` }
};

export function httpPost(data) {
    return axios
        .post(baseUrl + '/member/register', data, config)
        .then(res => {
            // console.log(`statusCode: ${res.statusCode}`)
            // console.log(res)
            return Promise.resolve(res)
        })
        .catch(error => {
            // console.error(error)
            return Promise.reject(error)
        })
}

export function httpGet(id) {
    axios
        .get(baseUrl + `/members/${id}`, config)
        .then(res => {
            // console.log(`statusCode: ${res.statusCode}`)
            // console.log(res.data)
        })
        .catch(error => {
            console.error(error)
        })
}