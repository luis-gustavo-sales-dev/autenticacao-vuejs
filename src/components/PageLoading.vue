<template>
  <div id="container">
    <div class="balls">
      <div id="ball-1" class="circle"></div>
      <div id="ball-2" class="circle"></div>
      <div id="ball-3" class="circle"></div>
      <div id="ball-4" class="circle"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLoading"
}
</script>

<style scoped>
.circle {
  display: inline-block;
  background-color: var(--secondary-color);
  height: 15px;
  width: 15px;
  border-radius: 25px;
}

#container {
  width: 100%;
  margin-top: 50px;
}

.balls {
  width: 50%;
  min-width: 100px;
  margin: 0px auto;
  text-align: center;
}

.balls div {
  margin: 0px 5px;
}

#ball-1{
  -webkit-animation-name: bounce;
  -webkit-animation-delay: 0.1s;
  -webkit-animation-duration: 1.2s;
  -webkit-animation-iteration-count: infinite;
}
#ball-2{
  -webkit-animation-name: bounce;
  -webkit-animation-delay: 0.2s;
  -webkit-animation-duration: 1.2s;
  -webkit-animation-iteration-count: infinite;
}
#ball-3{
  -webkit-animation-name: bounce;
  -webkit-animation-delay: 0.3s;
  -webkit-animation-duration: 1.2s;
  -webkit-animation-iteration-count: infinite;
}

#ball-4{
  -webkit-animation-name: bounce;
  -webkit-animation-delay: 0.4s;
  -webkit-animation-duration: 1.2s;
  -webkit-animation-iteration-count: infinite;
}

@-webkit-keyframes bounce {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(25px);
  }
  50% {
    transform: translateY(-25px);
  }
  75% {
    transform: translateY(25px);
  }
}
</style>