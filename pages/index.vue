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
  },
}
</script>

<style>

 .app{
    
  }

  h2 {
    @apply lg:text-3xl text-2xl  font-black
  }
  p {
    font-size: 0.75rem;
  }
</style>

