<template>
    <div class="bg-white-dark">
        <div class="px-44">
            <h2 class="text-3xl font-extrabold mb-5">We are</h2>
            <h1 class="text-3xl font-extrabold text-red mb-8">Digital Advertising Specialists.</h1>
            <p class="text-sm font-thin text-gray-500">We are a group of young digital specialists who are eager to deliver results for your business. In the age where everything is connected at a touch of a finger tip, there are no recipes to succeed in the digital world, only the best way for you. Our goal is to find that perfect recipe for you.</p>
        </div>
        <div class="box_main w-full mt-20 overflow-hidden flex justify-center items-center relative text-center">
            <Particles />
            <div class="artboard-purple">
            </div>
            <AppCircle style="top:5rem; left: 20%" title="Graphic Design" />
            <AppCircle style="top:5rem; right: 13%"  title="Digital Advertising" />
            <AppCircle style="bottom:2rem; left: 14%" title="Social Media Management" />
            <AppCircle style="bottom:2rem; right: 20%" title="Website Development" />
            <div class="flex items-center justify-center flex-col mt-6">
                <curvy-line/>
                <h2>Our Services</h2> <br>
                <h3 class="font-extrabold text-lg">We can do these awesome things</h3> <br>
                <p class="w-96 text-xs text-white font-thin leading-5">Our team has a collaborative and hollistic view of the digital landscape. Our services range from the fundamental assets such as a website, brochures, logo, to your outreach strategy to attract your perfect target customers.</p>
            </div>
        </div>
    </div>
</template>

<script>
import AppCircle from './circle.vue'
import Particles from './particles.vue'
import CurvyLine from '../lines/curvyline.vue'
export default {
    components: {
        AppCircle,
        Particles,
        CurvyLine
    },
    name: 'ServicesSection'
}
</script>

<style >
    .box_main{
        height: 43rem;
        background: url('~/assets/img/home/Artboard2.png') no-repeat center;
        background-size: 100% 100%;
        object-fit: contain;
    }
    @media screen and (max-width: 1080px) {
       .box_main{
        height: 43rem;
        background: url('~/assets/img/home/Artboard2.png') no-repeat center;
        background-size: contain;
        object-fit: contain;
    } 
    }
    .circle1{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 90%;
        height: 90vw;
        border-radius: 100rem;
    }
    .circle2{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 50%;
        height: 50vw;
        border-radius: 100rem;
    }
</style>