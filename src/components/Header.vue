<template>
  <header>
    <nav>
      <router-link to='/' class="logo">
        <img src="@/assets/auth-logo.svg"  alt="">
      </router-link>
      <router-link class='btn' to="/login">{{ username || "Login"}}</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    username() {
      return this.$store.state.login.name
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
  
</style>