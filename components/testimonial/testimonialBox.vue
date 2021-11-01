<template>
    <div class="lg:w-80 w-72 mx-2 h-60 flex flex-col items-start justify-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="35.118" height="26.723" viewBox="0 0 35.118 26.723">
            <path id="Icon_metro-quote" data-name="Icon metro-quote" d="M8.355,23V36.364H22.4V23H15.378s0-6.681,7.024-6.681V9.64S8.355,9.64,8.355,23Zm35.118-6.681V9.64S29.425,9.64,29.425,23V36.364H43.472V23H36.449S36.449,16.321,43.472,16.321Z" transform="translate(-8.355 -9.64)" fill="#9fb0e4"/>
        </svg>
        <br>
        <p class="text-black-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
        <div class="flex items-center justify-start">
            <badge class="lg:mx-0 lg:mr-5 m-0" size="14"/> 
            <p class="name font-sm">Joseph Jackson</p>
        </div>
    </div>
</template>

<script>
import Badge from '../icons/badge.vue'
export default {
    name: 'TestimonialBox',
    components: {
        Badge
    }
}
</script>

<style scoped>
    .name {
        font-weight: 800 ;
    }
</style>