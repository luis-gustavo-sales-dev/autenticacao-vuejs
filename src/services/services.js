import axios from "axios"

const urlBase = "http://localhost:3003"

const newAxiosInstance = axios.create({
  baseURL: urlBase
})

newAxiosInstance.interceptors.request.use(
  function(config) {
    const token = window.localStorage.token;
    if(token) {
      config.headers.authorization = token
    }
    return config;
  },
  function (error) {
    return Promise.reject(error)
  }
)

export const api = {
  get(endpoint) {
    return newAxiosInstance.get(endpoint)
  },
  post(endpoint, payload) {
    return newAxiosInstance.post(endpoint, payload)
  }
}