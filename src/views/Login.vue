<template>
  <div >
    <div v-if="showPage" class="login">
      <h1 class="titulo">Login</h1>
      <div></div>
      <form>
        <label for="email">Email: </label>
        <input tabindex="1" type="email" id="email" v-model="email">
        <label for="password">Senha: </label>
        <input tabindex="2" type="password" id="password" v-model="password">
        <button type="submit" tabindex="3" class="btn" @click.prevent="logar">{{efeitoBotaoEntrar}}</button>
        <PageLoading v-if="btnClicked" />
      </form>
    </div>
    <div v-else>
      <PageLoading />
    </div>
  </div>
</template>

<script>

export default {
  name: "Login",
  data() {
    return {
      email: "luisgssf@gmail.com",
      password: "123456@Gustavo",
      efeitoBotaoEntrar: "Entrar",
      controleEfeitoBotaoEntrar: false,
      quantidadePontosEfeito: 0,
      showPage: false,
      btnClicked: false
    }
  },
  computed: {
    logged() {
      return this.$store.state.login.logged
    }
  },
  methods: {
    async logar(event) {
      // console.log(target)
      this.controleEfeitoBotaoEntrar = true
      this.efeitoEntrar(event.target)
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
        this.controleEfeitoBotaoEntrar = false
      } catch (error) {
        alert("B - Sem conexão com o servidor!!!")
        // console.log(error)
      }
      /*
      setTimeout(() => {
        this.controleEfeitoBotaoEntrar = false
      }, 10000);*/
    },
    async getTokenFromStoreAndValidate(next) {
      let token = window.localStorage.token
      if(token) {
        await this.$store.dispatch('login/validateToken', { token })
          .then( async (response) => {
            if (response.data && response.data.valid) {
              await this.$store.dispatch('login/getUserByToken')
              this.$router.push({name: "home"})
            } else {
              this.$router.push({name: 'home'})
            }
          })
      } else {
        this.showPage = true
        next()
      }
    },

    efeitoEntrar(target) {
      target.disabled = true
      target.classList.add("btn-disabled")
      this.btnClicked = true
    }
  },

  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.getTokenFromStoreAndValidate(next)
      // next()
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
    margin: 20px 0px;
    text-align: center;
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

  .btn:focus {
    background: var(--secondary-color);
    color: white;
    transform: scale(1.05);
  }

  .btn-disabled {
    background: gray;
  }
</style>
