import axios from 'axios';

const defaultHeaders = () => ({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "x-requested-with,content-type"
});

// create axios instance
const http = axios.create({
    baseURL: '',
    withCredentials: true, // set cross-origin
    headers:{
        'Content-Type': 'application/json',
    },
    timeout: 30000
});

/**
 * define http method for get/delete/post/put request
 * @param method
 * @param url
 * @param data 
 * @param headers
 * @returns {Promise}
 */
function httpRequest(method, url, params, headers, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
        headers: headers || defaultHeaders(),
    }).then(function (res) {
        response(res);
    }).catch(function (err) {
        response(err);
    })
}

export default {
    get: function (url, params, headers, response) {
        return httpRequest('GET', url, params, headers, response)
    },
    post: function (url, params, headers, response) {
        return httpRequest('POST', url, params, headers, response)
    },
    put: function (url, params, headers, response) {
        return httpRequest('PUT', url, params, headers, response)
    },
    delete: function (url, params, headers, response) {
        return httpRequest('DELETE', url, params, headers, response)
    }
}
