import axios from "axios"

const urlBase = "http://localhost:3003"

const newAxiosInstance = axios.create({
  baseURL: urlBase
})

export const api = {
  get(endpoint) {
    return newAxiosInstance.get(endpoint)
  },
  post(endpoint, payload) {
    return newAxiosInstance.post(endpoint, payload)
  }
}