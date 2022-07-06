<template>
  <div>
    <div v-if="showPage" class="home">
      <section class="presentation">
        <p>Fotos da Home</p>
        <p>Fotos da Home</p>
      </section>
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
  .presentation {
    display: flex;
    justify-content: space-around;
  }

  .presentation p {
    padding: 50px 0px;
  }
</style>
