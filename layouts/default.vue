<template>
    <div class="myApp">
        <Header class="lg:flex hidden"/>
        <MobileHeader class="lg:hidden" />
        <Nuxt/>
        <Footer />
    </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import MobileHeader from './mobileHeader.vue'
export default {
    components: {
        Header,
        Footer,
        MobileHeader
    },
}
</script>

<style scoped>
    .myApp {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden ;
    }
</style>