<template>
  <div class="login">
    <h1 class="titulo">Login</h1>
    <div></div>
    <form>
      <label for="email">Email: </label>
      <input tabindex="1" type="email" id="email" v-model="email">
      <label for="password">Senha: </label>
      <input tabindex="2" type="password" id="password" v-model="password" @keydown.enter="logar">
      <button tabindex="3" class="btn" @click.prevent="logar">{{efeitoBotaoEntrar}}</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      efeitoBotaoEntrar: "Entrar",
      controleEfeitoBotaoEntrar: false,
      quantidadePontosEfeito: 0
    }
  },
  methods: {
    logar() {
      this.controleEfeitoBotaoEntrar = true
      this.efeitoEntrar()
      setTimeout(() => {
        this.controleEfeitoBotaoEntrar = false
      }, 10000);
    },
    efeitoEntrar() {
      this.efeitoBotaoEntrar = "Entrando"
      let interval = setInterval(() => {
        if (this.controleEfeitoBotaoEntrar) {
          if (this.quantidadePontosEfeito < 3) {
            this.efeitoBotaoEntrar += "."
            this.quantidadePontosEfeito++
          } else {
            this.quantidadePontosEfeito = 0
            this.efeitoBotaoEntrar = "Entrando"
          }
        } else {
          this.efeitoBotaoEntrar = "Entrar"
          clearInterval(interval)
        }
      }, 1000)
    }
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
</style>
