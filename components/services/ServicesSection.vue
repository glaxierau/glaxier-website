<template>
    <div class="bg-white-dark pt-10">
        <div class="lg:px-44 px-4">
            <h2 class="lg:text-3xl text-base font-extrabold lg:mb-5 mb-1">We are</h2>
            <h1 class="lg:text-3xl text-base font-extrabold text-red mb-8">Digital Advertising Specialists.</h1>
            <p class="text-sm font-thin text-gray-500">We are a group of young digital specialists who are eager to deliver results for your business. In the age where everything is connected at a touch of a finger tip, there are no recipes to succeed in the digital world, only the best way for you. Our goal is to find that perfect recipe for you.</p>
        </div>
        <div class="w-full h-screen mt-20 overflow-hidden flex justify-center items-center relative text-center">
            <img src="~/assets/img/home/Artboard2.png" class="circle_image absolute top-0" alt="circles">
            <Particles />
            <AppCircle :style="isMobile?'top:8rem; left: 5%':'top:5rem; left: 20%'" title="Graphic Design" />
            <AppCircle :style="isMobile?'top:5rem; right: 5%':'top:5rem; right: 13%'"  title="Digital Advertising" />
            <AppCircle :style="isMobile?'bottom:8rem; left: 5%':'bottom:2rem; left: 14%'" title="Social Media Management" />
            <AppCircle :style="isMobile?'bottom:5rem; right: 5%':'bottom:2rem; right: 20%'" title="Website Development" />
            <div class="position top-0 left-1/2 z-20 flex items-center justify-center flex-col mt-6">
                <Title title="Our Services" lineColor="#fff"/> <br>
                <h3 class="font-extrabold lg:text-lg text-base">We can do these awesome things</h3> <br>
                <p class="lg:w-96 w-72 text-xs text-white font-thin leading-5">Our team has a collaborative and hollistic view of the digital landscape. Our services range from the fundamental assets such as a website, brochures, logo, to your outreach strategy to attract your perfect target customers.</p>
            </div>
        </div>
    </div>
</template>

<script>
import AppCircle from './circle.vue'
import Particles from './particles.vue'
import CurvyLine from '../lines/curvyline.vue'
import {store} from '~/store/store.js'
export default {
    components: {
        AppCircle,
        Particles,
        CurvyLine
    },
    name: 'ServicesSection',
    computed: {
        isMobile(){
            return store.isMobile
        }
    }
}
</script>

<style >
    .circle_image {
        width: 100%;
        height: 100vh;
        object-fit: cover;
        z-index: 0;
    }
    p {
        font-weight: 100;
        /* font-size: 0.75rem */
    }
</style>