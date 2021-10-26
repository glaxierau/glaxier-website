<template>
    <div class="flex flex-col justify-center items-center">
        <curvy-line :color="lineColor" :width="lineWidth"/>
        <h2>{{title}}</h2>
    </div>
</template>

<script>
import CurvyLine from '../lines/curvyline.vue'
export default {
    name: 'Title',
    props: ['title', 'lineColor', 'lineWidth'],
    components: {
        CurvyLine
    }
}
</script>

<style scoped>

</style>