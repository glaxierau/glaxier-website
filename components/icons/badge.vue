<template>
    <div class="bg-gray-200 rounded-full lg:m-4 lg:my-5 m-2 my-3" :class="`lg:w-${size?size:'24'} lg:h-${size?size:'24'} w-12 h-12`">
    </div>
</template>

<script>
export default {
    name: 'Badge',
    props: ['size']
}
</script>

<style scoped>

</style>