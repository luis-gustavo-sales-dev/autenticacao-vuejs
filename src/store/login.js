import { api } from "../services/services.js"

export default {
  namespaced: true,
  state: {
    logged: false,
    user: {
      name: 'Luis Gustavo',
      email: '',
      // token: {}, -- ACHO INSEGURO O TOKEN FICAR AQUI
      deviceId: ''
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user = payload
    },
    CHANGE_LOGGED(state, payload) {
      state.logged = payload
    }
  },
  actions: {
    login(context, payload) {
      api.post('/auth/login', payload).then (response => {
        context.commit("SET_USER", response.data)
        context.commit("CHANGE_LOGGED", true)
      })
    }
  }
}