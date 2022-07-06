const blockPages = [
  'user'
]

const getTokenFromStoreAndValidate = async (to, from, next, store, router) => {
  let token = window.localStorage.token
  // console.log(to)
  let isBlockPage = blockPages.includes(to.name)
  if(token) {
    await store.dispatch('login/validateToken', { token })
      .then( async (response) => {
        if (response.data && response.data.valid) {
          // POSSUI UM TOKEN VÁLIDO
          await store.dispatch('login/getUserByToken')
          // router.push({name: "home"})
          // store.commit('screencontrol/CHANGE_SHOW_PAGE', true)
          if (to.name == 'login' || to.name == 'signup') {
            router.push({name: 'home'})
          }
          else {
            next()
          }
          store.commit('screencontrol/CHANGE_SHOW_PAGE', true)
          
        } else {
          // NAO POSSUI UM TOKEN VALIDO
          window.localStorage.token = ""
          // Se tentar acessar uma página bloqueada vai para login se não continue
          if (!isBlockPage)
            next()
          else
            router.push({name: 'login'})
        }
      })
  } else {
    // NÃO POSSUI TOKEN
    store.commit('screencontrol/CHANGE_SHOW_LOGIN_PAGE', true)

    if (!isBlockPage) {
      store.commit('screencontrol/CHANGE_SHOW_PAGE', true)
      next()
    } else {
      router.push({name: 'login'})
    }
  }
}

const beforeEach = (to, from, next, store, router) => {
  // console.log("Entre no meu beforeEach")
  getTokenFromStoreAndValidate(to, from, next, store, router)
}

module.exports = { beforeEach, getTokenFromStoreAndValidate }