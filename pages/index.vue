<template>
  <div class="app">
    <Home/>
  </div>
</template>

<script>
import Home from './home.vue'
import {store, mutation} from '~/store/store.js'
export default {
  components:{
    Home
  },
  mounted(){
        const screenWidth = window.innerWidth
        screenWidth >= 1020 ? mutation.toggleScreenSize(false): mutation.toggleScreenSize(true)
        this.$nextTick(() => {
        window.addEventListener('resize', this.onScreenResize)
      })
    },
  beforeDestroy(){
        window.removeEventListener('resize', this.onScreenResize)
    },
  methods: {
      onScreenResize(){
        const screenWidth = window.innerWidth
        screenWidth >= 1020 ? mutation.toggleScreenSize(false): mutation.toggleScreenSize(true)
      }
  }
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

