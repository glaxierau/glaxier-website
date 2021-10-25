<template>
  <div class="app">
    <Header/>
    <Banner/>
    <ServicesSection/>
  </div>
</template>

<script>
import Header from '../components/layout/header.vue'
import Banner from '../components/banner/banner.vue'
import ServicesSection from '../components/services/ServicesSection.vue'

export default {
  components:{
    Header,
    Banner,
    ServicesSection
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
</style>

