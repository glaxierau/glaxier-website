<template>
    <div>
        <SmallCircle :size="6" style="top:5rem; left:20%" />
        <SmallCircle :size="10" style="top:6rem; left:35%" />
        <SmallCircle :size="10" style="top:5rem; right:33%" />
        <SmallCircle :size="6" style="top:4rem; right:10%" />
        <SmallCircle :size="6" style="top:22rem; left:18%" />
        <SmallCircle :size="10" style="bottom:3.5rem; left:31%" />
        <SmallCircle :size="6" style="bottom:1.5rem; right:33%" />
        <SmallCircle :size="10" style="bottom:20rem; right:13%" />
    </div>
</template>

<script>
import SmallCircle from '../services/smCircle.vue'

export default {
    name: 'Particles',
    components:{
        SmallCircle
    }
}
</script>

<style >

</style>