export default {
  namespaced: true,
  state: {
    showLoginPage: false,
    showPage: false
  },
  mutations: {
    CHANGE_SHOW_LOGIN_PAGE(state, payload) {
      state.showLoginPage = payload
    },
    CHANGE_SHOW_PAGE(state, payload) {
      state.showPage = payload
    }
  },
  actions: {
  }
}
