<template>
<div>
    <div v-if="showPage" class="userinfo">
      <h1>Minhas informações</h1>
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
          <label for="password" >Senha Atual:</label>
          <input tabindex="3" type="password" id="password" v-model="user.password">
        </div>
        <div>
          <label for="confirm_password" >Nova Senha:</label>
          <input tabindex="4" type="password" id="confirm_password" v-model="user.new_password">
        </div>
        <div>
          <label for="role" >Role:</label>
          <input tabindex="4" type="text" disabled id="role" :value="user.role">
        </div>
        <button type="submit" tabindex="5" class="btn" @click.prevent="atualizar">Atualizar</button>
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
  computed: {
    user() {
      return this.$store.state.login.user
    },
    showPage () {
      return this.$store.state.screencontrol.showPage
    }
  },
  beforeRouteEnter (to, from, next) {
    // console.log("beforeRouteEnter: LOGIN")
    next(vm => {
      vm.$store.commit('screencontrol/CHANGE_SHOW_PAGE', false)
      beforeEach(to, from, next, vm.$store, vm.$router)
    })
  }
}
</script>

<style scoped>
.userinfo {
    display: grid;
    grid-template-columns: 2fr 4fr 2fr;
    width: 90%;
    margin: 0 auto;
    padding: 0 20px;
  }

  .userinfo h1 {
    grid-column: 1 / 4;
  }

  .userinfo form {
    width: 100%;
    min-width: 50%;
  }

  .userinfo label {
    display: block;
    margin-bottom: 10px;
  }

  .userinfo input {
    margin-bottom: 10px;
    width: 100%;
  }

  .userinfo button {
    display: block;
    margin: 20px auto;
    width: 100%;
  }

  .btn-disabled {
    background: gray;
  }

  div p {
    text-align: center;
  }
</style>