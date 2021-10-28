<template>
    <div>
        <SmallCircle :size="isMobile?3:6" :style="isMobile?'top:5rem; left:10%' :'top:5rem; left:20%'" />
        <SmallCircle :size="isMobile?5:10" :style="isMobile?'top:4rem; left:20%':'top:6rem; left:35%'"/>
        <SmallCircle :size="isMobile?5:10" :style="isMobile?'top:12rem; right:5%':'top:5rem; right:33%'"  />
        <SmallCircle :size="isMobile?3:6" :style="isMobile?'top:40rem; left:10%' : 'top:4rem; right:10%'" />
        <SmallCircle :size="isMobile?3:6" :style="isMobile?'top:22rem; left:18%': 'top:22rem; left:18%'" />
        <SmallCircle :size="isMobile?5:10" :style="isMobile?'bottom:3.5rem; left:31%':'bottom:3.5rem; left:31%'" />
        <SmallCircle :size="isMobile?3:6" :style="isMobile?'bottom:1.5rem; right:33%':'bottom:1.5rem; right:33%'"  />
        <SmallCircle :size="isMobile?5:10" :style="isMobile?'bottom:20rem; right:13%':'bottom:20rem; right:13%'" />
    </div>
</template>

<script>
import SmallCircle from '../services/smCircle.vue'
import {store} from '~/store/store'
export default {
    name: 'Particles',
    components:{
        SmallCircle
    },
    computed:{
        isMobile(){
            return store.isMobile
        }
    }
}
</script>

<style >

</style>