<template>
    <div class="bg-gray-200 rounded-full m-4 my-5" :class="`w-${size?size:'24'} h-${size?size:'24'}`">
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