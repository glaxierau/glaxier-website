<template>
  <div class="app">
    <Home/>
  </div>
</template>

<script>
import Home from './home.vue'

export default {
  components:{
    Home
  }
}
</script>

<style>
  .app{
    margin: 0;
    box-sizing: border-box;
    max-width: 100%;
    width: 100vw;
  }
  html {
    font-family: 'Poppins';
  }
  h2 {
    @apply text-3xl font-black
  }
  p {
    font-size: 0.75rem;
  }
</style>

