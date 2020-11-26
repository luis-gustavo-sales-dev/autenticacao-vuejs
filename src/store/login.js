import { api } from "../services/services.js"
import jwt from 'jsonwebtoken'


export default {
  namespaced: true,
  state: {
    logged: false,
    user: {
      _id: '',
      name: '',
      email: '',
      role: '',
      active: '',
      password: ''
    }
  },
  mutations: {
    UPDATE_USER(state, payload) {
      // state.user = Object.assign(state.user, payload)
      state.user = payload
    },
    CHANGE_LOGGED(state, payload) {
      state.logged = payload
    }
  },
  actions: {
    login(context, payload) {
      return api.post('/auth/login', payload).then (response => {
        // console.log(response.data)
        let userData = jwt.decode(response.data.token)
        // console.log("Decodado: ", userData)
        context.commit("UPDATE_USER", userData)
        context.commit("CHANGE_LOGGED", true)

        window.localStorage.token = response.data.token
      }). catch ( (err) => {
        if (err.response) {
          alert(err.response.data.errors)
        } else {
          alert("Erro de rede...")
        }
        // console.log({...err})
      })
    },
    getUserByToken(context) {
      // console.log("Tentando pegar usuário pelo token")
      return api.get('/user')
        .then( response => {
          // console.log("Dados do usuário", response.data)
          let userData = response.data
          context.commit("UPDATE_USER", userData)
          context.commit("CHANGE_LOGGED", true)
        })
        .catch( err => {
          if (err.response) {
            alert(err.response.status, err.response.data.errors)
            console.log({...err})
          } else {
            alert('Erro de rede...')
          }
        })
    },
    validateToken(context, payload) {
      return api.post('/auth/validatetoken', payload)
        .catch( (err) => {
          if (err.response) {
            alert(err.response.data.errors)
          } else {
            alert("Erro de rede...")
          }
        })
    },
    deslogar(context) {
      let user = {}
      context.commit("CHANGE_LOGGED", false)
      context.commit("UPDATE_USER", user)
    },
    signup (context, payload) {
      return api.post('/auth/signup', payload)
    }
  }
}