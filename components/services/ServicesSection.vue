<template>
    <div class="bg-white-dark">
        <div class="px-44">
            <h2 class="text-3xl font-extrabold mb-5">We are</h2>
            <h1 class="text-3xl font-extrabold text-red mb-8">Digital Advertising Specialists.</h1>
            <p class="text-sm font-thin text-gray-500">We are a group of young digital specialists who are eager to deliver results for your business. In the age where everything is connected at a touch of a finger tip, there are no recipes to succeed in the digital world, only the best way for you. Our goal is to find that perfect recipe for you.</p>
        </div>
        <div class="box_main w-full mt-20 overflow-hidden flex justify-center items-center relative text-center">
            <Particles />
            <!-- <div class="circle1 border-white border"/> -->
            <!-- <div class="circle2 border-white border" /> -->
            <div class="artboard-purple">
            </div>
            <AppCircle style="top:5rem; left: 20%" title="Graphic Design" />
            <AppCircle style="top:5rem; right: 13%"  title="Digital Advertising" />
            <AppCircle style="bottom:2rem; left: 14%" title="Social Media Management" />
            <AppCircle style="bottom:2rem; right: 20%" title="Website Development" />
            <div class="flex items-center justify-center flex-col mt-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="-mb-11" width="220.023" height="24.999" viewBox="0 0 250.023 24.999">
                    <path id="Path_2" data-name="Path 2" d="M-59.5-4.5c9.994-.026,12.138,9.835,27.778,10S-15.63-4.426.024-4.5s16.214,10,31.746,10,16.239-10,31.746-10,16.144,10.03,31.746,10c15.927.013,16.1-9.966,31.746-10s16.041,10.053,31.746,10c15.978.1,15.913-9.99,31.746-10" transform="translate(59.519 12.002)" fill="none" stroke="#fff" stroke-width="15"/>
                </svg>
                <h2 class="text-3xl font-black">Our Services</h2> <br>
                <h3 class="font-extrabold text-lg">We can do these awesome things</h3> <br>
                <p class="w-96 text-xs text-white font-thin leading-5">Our team has a collaborative and hollistic view of the digital landscape. Our services range from the fundamental assets such as a website, brochures, logo, to your outreach strategy to attract your perfect target customers.</p>
            </div>
        </div>
    </div>
</template>

<script>
import AppCircle from '../services/circle.vue'
import Particles from '../services/particles.vue'
export default {
    components: {
        AppCircle,
        Particles
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