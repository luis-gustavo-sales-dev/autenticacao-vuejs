<template>
  <div>
    <p>Página do usuário: {{name || "Sem nome"}}</p>
    <p>Email: {{email || "Sem email"}}</p>
  </div>
</template>

<script>
export default {
  computed: {
    name () {
      return this.$store.state.login.user.name
    },
    email () {
      return this.$store.state.login.user.email
    }
  }
}
</script>

<style>

</style>