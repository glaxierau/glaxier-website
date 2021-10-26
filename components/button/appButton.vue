<template>
    <div>
        <div :class="`rounded-full m-3 ${color} hover:${hoverColor} border cursor-pointer`" v-if="customed" >
            <p :class="`px-${px} py-3 ${txtColor} hover:${txtHover} text-xs`">{{title}}</p>
        </div>
        <div :class="` rounded-full m-3 ${color} hover:${hoverColor} cursor-pointer`" v-else >
            <p :class="`px-${px} py-3 ${txtColor} hover:${txtHover} text-xs`">{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppButton',
    props: ['title', 'px', 'color', 'hoverColor', 'txtColor', 'txtHover', 'customed' ]
}
</script>

<style>
   
</style>