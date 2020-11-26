import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import login from '@/store/login.js'
import screencontrol from '@/store/screencontrol.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    login,
    screencontrol
  }
})
