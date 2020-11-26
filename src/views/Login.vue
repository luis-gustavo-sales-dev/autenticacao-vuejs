<template>
  <div>
    <div v-if="showLoginPage" class="login">
      <h1>Login</h1>
      <div></div>
      <form>
        <label for="email">Email: </label>
        <input tabindex="1" type="email" id="email" v-model="email">
        <label for="password">Senha: </label>
        <input tabindex="2" type="password" id="password" v-model="password">
        <button type="submit" tabindex="3" class="btn" @click.prevent="logar">{{efeitoBotaoEntrar}}</button>
        <router-link id="signup" to="/signup">
          Não tenho conta!!!
        </router-link>
        <PageLoading v-if="btnClicked" />
      </form>
      
    </div>
    <div v-else>
      <PageLoading />
    </div>
  </div>
</template>

<script>

import { beforeEach } from '../utils/loginRouteUtils'

export default {
  name: "Login",
  data() {
    return {
      email: "luisgssf1@gmail.com",
      password: "luisgssf",
      efeitoBotaoEntrar: "Entrar",
      quantidadePontosEfeito: 0,
      // showPage: true,
      btnClicked: false
    }
  },
  computed: {
    logged() {
      return this.$store.state.login.logged
    },
    showLoginPage () {
      return this.$store.state.screencontrol.showLoginPage
    }
  },
  methods: {
    async logar(event) {
      // console.log(target)
      this.efeitoEntrar(event.target, true)
      let user = {}
      user.email = this.email
      user.password = this.password
      user.deviceId = "abc"
      // console.log(user)
      try {
        await this.$store.dispatch("login/login", user)
        if (this.logged) {
          this.$router.push( {name: "user"} )
        }
        this.efeitoEntrar(event.target, false)

      } catch (error) {
        alert("B - Sem conexão com o servidor!!!")
        // console.log(error)
      }
    },
    // Método repetivo. Tem que ir para algum lugar em comum
    efeitoEntrar(target, ativar) {
      if (ativar) {
        target.disabled = true
        target.classList.add("btn-disabled")
        this.btnClicked = true
      } else {
        target.disabled = false
        target.classList.remove("btn-disabled")
        this.btnClicked = false
      }
    }

  },
  beforeRouteEnter (to, from, next) {
    // console.log("beforeRouteEnter: LOGIN")
    next(vm => {
      vm.$store.commit('screencontrol/CHANGE_SHOW_LOGIN_PAGE', false)
      beforeEach(to, from, next, vm.$store, vm.$router)
    })
  }
}
</script>

<style scoped>
  .login {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .login h1 {
    grid-column: 1 / 4;
  }

  .login form {
    width: 100%;
    min-width: 50%;
  }

  .login label {
    display: block;
    margin-bottom: 10px;
  }

  .login input {
    margin-bottom: 10px;
    width: 100%;
  }

  .login button {
    display: block;
    margin: 20px auto;
    width: 100%;
  }

  .btn-disabled {
    background: gray;
  }

  #signup {
    display: block;
    text-align: center;
  }
</style>
