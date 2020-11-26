<template>
  <div id="app">
    <Header />
    <main id="main">
      <transition mode="out-in">
        <!-- Coloque uma key se a rota for dinamica (veja o material do site da origamid -->
        <router-view/>
      </transition>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
  :root {
    --main-color: #8d6cf3;
    --secondary-color: #42b983;
    --text-color:  #2c3e50;
  }

  * {
    box-sizing: border-box;
  }

  body, ul, li, h1, h2, p {
    padding: 0px;
    margin: 0px;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: Avenir, Helvetica, Arial, sans-serif;

    color: var(--text-color);
    background: url("./assets/padrao-fundo.svg") repeat top;
  }

  a {
    color: var(--main-color);
    text-decoration: none;
  }

  img {
    max-width: 100%;
    display: block;
  }

  h1 {
    margin: 10px 0px;
    text-align: center;
  }
  
  input {
    border: 1px solid var(--main-color);
    outline: none;
    background: white;
    color: var(--main-color);
    font-size: 1rem;
    border-radius: 10px;
    padding: 10px 30px;
    transition: all 0.3s;
  }

  input:focus {
    border: 1px solid var(--secondary-color);
    color: var(--secondary-color);
    transform: scale(1.05);
  }

  .btn {
    display: block;
    padding: 10px 30px;
    background: var(--main-color);
    border-radius: 5px;
    color: white;
    text-align: center;
    font-size: 1rem;
    box-shadow: 0 4px 8px rgba(30, 60, 90, 0.2);
    transition: all 0.3s;
    border: none;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    cursor: pointer;
    outline: none;
  }

  .btn:hover {
    background: var(--secondary-color);
    color: white;
    transform: scale(1.05);
  }

  /*#app {
  }*/



  a.router-link-exact-active {
    color: white;
    background: var(--main-color);
  }

  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  #main {
    flex: 1;
  }

  /* Animações das transições das rotas */
  .v-enter, .v-leave-to {
    transform: translate3d(-20px, 0, 0);
    opacity: 0;
  }

  .v-enter-active, .v-leave-active {
    transition: all 0.3s;
  }
</style>
