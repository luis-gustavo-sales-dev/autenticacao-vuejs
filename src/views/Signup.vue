<template>
  <div>
    <div v-if="showPage" class="signup">
      <h1>Página cadastro</h1>
      <div></div>
      <form>
        <div>
          <label for="name" >Nome:</label>
          <input tabindex="1" type="text" id="name" v-model="user.name">
        </div>
        <div>
          <label for="email" >Email:</label>
          <input tabindex="2" type="email" id="email" v-model="user.email">
        </div>
        <div>
          <label for="password" >Senha:</label>
          <input tabindex="3" type="password" id="password" v-model="user.password">
        </div>
        <div>
          <label for="confirm_password" >Confirmação:</label>
          <input tabindex="4" type="password" id="confirm_password" v-model="user.confirm_password">
        </div>
        <button type="submit" tabindex="5" class="btn" @click.prevent="signup">Cadastrar</button>
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
  name: "Signup",
  data () {
    return {
      user : {
        name: 'luisgustavo',
        email: 'luisgustavo@gmail.com',
        password: '123456@Gustavo',
        confirm_password: '123456@Gustavo'
      },
      btnClicked: false
    }
  },
  computed: {
    showPage () {
      return this.$store.state.screencontrol.showPage
    }
  },
  methods: {
    async signup (event) {
      this.efeitoEntrar(event.target, true)
      this.$store.commit('screencontrol/CHANGE_SHOW_PAGE', false)
      // console.log(this.$store.state.screencontrol.showPage)
      this.$store.dispatch('login/signup', this.user)
        .then( (response) => {
          if (response.status === 201) {
            alert(response.data.messages)
            this.user = {}
            this.$router.push( {name: 'login'})
          }
        })
        .catch ( (err) => {
          if (err.response) {
            alert(err.response.data.errors)
            this.$store.commit('screencontrol/CHANGE_SHOW_PAGE', true)
          } else {
            alert("O servidor está fora!!!")
          }
        })
      // Limpe os campos no final
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
      beforeEach(to, from, next, vm.$store, vm.$router)
    })
  }
}
</script>

<style scoped>
.signup {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .signup h1 {
    grid-column: 1 / 4;
  }

  .signup form {
    width: 100%;
    min-width: 50%;
  }

  .signup label {
    display: block;
    margin-bottom: 10px;
  }

  .signup input {
    margin-bottom: 10px;
    width: 100%;
  }

  .signup button {
    display: block;
    margin: 20px auto;
    width: 100%;
  }

  .btn-disabled {
    background: gray;
  }
</style>