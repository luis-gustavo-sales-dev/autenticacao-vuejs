<template>
  <footer>
    <p>Todos os direitos reservados!!!</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
  footer {
    background: var(--main-color);
    padding: 25px 0;
    text-align: center;
    font-size: 1.2rem;
    color: white;
    position: relative;
    /* Faça isso pra que ele sempre fique fora da tela */
    top: 75px;
  }
</style>