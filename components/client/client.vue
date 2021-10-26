<template>
    <div class="flex flex-col items-center justify-center mt-2  bg-white-dark h-screen">
        <Title title="Our Clients" lineColor="#CFD7F1" lineWidth="180" /> <br> <br>
        <p class="w-2/6 text-black-light">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor. Lorem ipsum dolor sit amet, consetetur sadipscing elitr,</p>
        <div class="flex mt-20 w-3/5 items-center justify-between flex-wrap">
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