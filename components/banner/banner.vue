<template>
    <div class="relative h-screen">
        <div class="bg_img_container">
            <img src="~/assets/img/home/meeting.png" class="bg-img">
        </div>
        <div class="absolute lg:top-24 bottom-0 transform left-1/2 -translate-x-2/4 lg:translate-x-0 lg:left-40 lg:w-1/3  h-3/5 flex justify-center items-center flex-col">
            <h3 class="text-white lg:text-2xl text-xl font-bolder mb-3 text_top">HEY! WE ARE</h3>
            <h1 class="glaxier_txt text-white lg:text-7xl text-5xl font-thin lg:mb-0 mb-8 ">Glaxier!</h1>
            <div class="flex">
                <AppButton title="GET IN TOUCH" width="w-44" color="bg-blue" hoverColor="bg-red" txtColor="text-white" />
                <AppButton title="READ MORE" width="w-36" color="bg-white" hoverColor="bg-red" txtColor="text-blue" txtHover="text-white" />
            </div>
        </div>
        <div class="absolute bottom-0 w-screen">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1917.95 320.19"><title>glxShape</title><path d="M1.48,1046.88l1110.81-260.6,240.23,78.44L1602,720.54l317.44,202.85v159.34H1.48Z" transform="translate(-1.48 -720.54)" fill="#F9F9FF"/></svg>
        </div>
    </div>
</template>

<script>
import AppButton from '../button/appButton.vue'

export default {
    name: 'Banner',
    components: {
        AppButton
    }
}
</script>

<style >
    .glaxier_txt{
        font-family: 'Cutive Mono';
    }
    .bg-img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
    }
    .bg_img_container {
        position: absolute;
        top: 0;
        background-color: black;
        width: 100vw;
        height: 100vh;
    }
    .text_top {
        letter-spacing: 4px;
        font-weight: 800;
    }
</style>