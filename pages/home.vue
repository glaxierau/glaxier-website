<template>
  <div>
    <Header/>
    <Banner/>
    <ServicesSection/>
    <AboutSection />
    <Client/>
    <Project />
    <Testimonial />
    <Articles />
  </div>
</template>

<script>
import Header from '../components/layout/header.vue'
import Banner from '../components/banner/banner.vue'
import ServicesSection from '../components/services/ServicesSection.vue'
import AboutSection from '../components/about/about.vue'
import Client from '../components/client/client.vue'
import Project from '../components/project/project.vue'
import Testimonial from '../components/testimonial/testimonial.vue'
import Articles from '../components/articles/articles.vue'

export default {
    name: 'Home',
    components:{
        Header,
        Banner,
        ServicesSection,
        AboutSection,
        Client,
        Project,
        Testimonial,
        Articles
    }
}
</script>

<style>
  html {
    font-family: 'Poppins';
  }
</style>

