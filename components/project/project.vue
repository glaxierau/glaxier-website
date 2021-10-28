<template>
    <div class="relative flex flex-col items-center justify-center -m-3 lg:h-96 h-60">
        <img src="~/assets/img/home/largeimg.png" class="bg_image" alt="bg-image">
        <div class="absolute lg:top-24 top-12 z-10 flex flex-col items-center justify-center">
            <h3 class="lg:text-2xl text-xl text-white font-bold lg:mb-12 mb-2">Let’s talk about “OUR” project.</h3>
            <AppButton :customed="true" title="GET STARTED" width="w-52" color="transparent" hoverColor="bg-white" txtColor="text-white" txtHover="text-blue-dark" />
        </div>
    </div>
</template>

<script>
import AppButton from '../button/appButton.vue'
export default {
    name: 'Project',
    components: {
        AppButton
    }
}
</script>

<style scoped>
    .bg_image{
        width: 100%;
        height: 22rem;
        object-fit: cover;
        position: absolute;
        top: 0;
        z-index: 1;
        margin-top: -5px;
    }
    @media screen and (max-width: 1090px) {
        .bg_image {
            height: 12rem;
        }
    }
</style>