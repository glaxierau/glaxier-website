<template>
    <div class="relative flex flex-col items-center justify-center mt-2 bg-white-dark lg:h-screen lg:py-0 py-16">
        <Title title="Our Clients" lineColor="#CFD7F1" lineWidth="180" /> <br> <br>
        <p class="lg:w-2/6 w-full lg:px-0 px-5 text-black-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
        <div class="flex lg:mt-20 mt-10 lg:w-3/5 w-4/5 items-center justify-between flex-wrap">
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
            <badge/>
        </div>
    </div>
</template>

<script>
import Title from '../title/title.vue'
import Badge from '../icons/badge.vue'
export default {
    name: 'Client',
    components: {
        Title,
        Badge
    }
}
</script>

<style scoped>

</style>