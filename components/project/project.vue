<template>
    <div class="bgImage flex flex-col items-center justify-center">
        <h3 class="text-2xl text-white font-bold">Let’s talk about “OUR” project.</h3>
        <br> <br>
        <AppButton :customed="true" title="CLICK" px="20" color="transparent" hoverColor="bg-white" txtColor="text-white" txtHover="text-blue-dark" />
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
    .bgImage {
        background-image: url('~/assets/img/home/largeimg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 22rem;
        margin-top: -1rem;
    }
</style>