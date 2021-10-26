<template>
    <div>
        <div :class="`rounded-full m-3 ${color} hover:${hoverColor} border cursor-pointer ${txtColor} hover:${txtHover}`" v-if="customed" >
            <p :class="`px-${px} py-3 text-xs`">{{title}}</p>
        </div>
        <div :class="` rounded-full m-3 ${color} hover:${hoverColor} cursor-pointer ${width?width:''} ${txtColor} hover:${txtHover} flex items-center justify-center`" v-else >
            <p :class="`px-${px} py-3 text-xs`">{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppButton',
    props: ['title', 'px', 'color', 'hoverColor', 'txtColor', 'txtHover', 'customed', 'width' ]
}
</script>

<style>
   
</style>