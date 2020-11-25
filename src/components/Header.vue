<template>
  <header>
    <nav>
      <router-link to='/' class="logo">
        <img src="@/assets/auth-logo.svg"  alt="">
      </router-link>
      <div class="botoes" v-if="logged">
        <router-link id="botaologin" class='btn' to="/user">
          {{ username }}
        </router-link>
        <span class="botaodeslogar" @click="deslogar">x</span>
        <!-- <button class="botaodeslogar" @click="deslogar">-></button> -->
      </div>
      <router-link v-else class='btn' to="/login">Login</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    username() {
      return this.$store.state.login.user.name
    },
    logged() {
      return this.$store.state.login.logged
    }
  },
  methods: {
    async deslogar() {
      window.localStorage.token = ""
      await this.$store.dispatch("login/deslogar")
      this.$router.push({name: 'login'})
    }
  }
}
</script>

<style scoped>
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px 20px;
    box-shadow: 0 2px 4px rgba(30, 60, 90, 0.2);
  }

  .logo {
    padding: 10px 0;
  }

  .logo img {
    width: 90px;
  }

  .logo.router-link-exact-active {
    background: none;
  }

  .botoes {
    position: relative;
  }

  .botaodeslogar {
    position: absolute;
    top: -10px;
    right: -10px;
    display: block;
    background: var(--text-color);
    padding: 5px;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    transition: all 0.3s;
  }

  .botaodeslogar:hover {
    transform: scale(1.05);
    color: red;
    background: white;
    border: 2px solid red;
  }
  
</style>