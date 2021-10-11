<template>
    <div class="bg_img h-screen pt-10">
        <div class="overlay pt-10">
            <div class="w-1/2 h-3/5 flex justify-center items-center flex-col">
                <h3 class="text-white text-2xl font-normal mb-3">HEY! WE ARE</h3>
                <h1 class="glaxier_txt text-white text-7xl">Glaxier!</h1>
                <div class="flex">
                    <AppButton title="CLICK" px="20" color="bg-blue" hoverColor="bg-red" txtColor="text-white" />
                    <AppButton title="READ MORE" px="8" color="bg-white" hoverColor="bg-red" txtColor="text-blue" txtHover="text-white" />
                </div>
            </div>
        </div>
        <div class="absolute bottom-0 w-full">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1917.95 362.19"><title>glxShape</title><path d="M1.48,1046.88l1110.81-260.6,240.23,78.44L1602,720.54l317.44,202.85v159.34H1.48Z" transform="translate(-1.48 -720.54)" fill="#F9F9FF"/></svg>
        </div>
    </div>
</template>

<script>
import AppButton from '../components/appButton.vue'

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
    .bg_img{
        background-image: url('../assets/meeting.jpeg');
        width: 100%;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }
    .overlay{
        position: absolute;
        top: 5rem;
        width: 100%;
        height: 85%;
        background-color: rgba(0, 0, 0, 0.708);
    }
</style>