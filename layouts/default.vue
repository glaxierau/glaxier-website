<template>
    <div class="myApp">
        <Header v-if="!isMobile"/>
        <MobileHeader v-if="isMobile" />
        <Nuxt/>
        <!-- <Footer /> -->
    </div>
</template>

<script>
import Header from './header.vue'
import Footer from './footer.vue'
import MobileHeader from './mobileHeader.vue'
import {store} from '~/store/store.js'
export default {
    components: {
        Header,
        Footer,
        MobileHeader
    },
    computed: {
        isMobile(){
            return store.isMobile
        }
    }
}
</script>

<style scoped>
    .myApp {
        width: 100vw;
        height: 100vh;
        overflow-x: hidden ;
    }
</style>