<template>
  <div>
    <Header/>
    <Banner/>
    <ServicesSection/>
    <AboutSection />
  </div>
</template>

<script>
import Header from '../components/layout/header.vue'
import Banner from '../components/banner/banner.vue'
import ServicesSection from '../components/services/ServicesSection.vue'
import AboutSection from '../components/about/about.vue'

export default {
    name: 'Home',
    components:{
        Header,
        Banner,
        ServicesSection,
        AboutSection
    }
}
</script>

<style>
  html {
    font-family: 'Poppins';
  }
</style>

