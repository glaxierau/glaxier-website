<template>
    <div>
        <div :class="`rounded-full m-3 ${color} hover:${hoverColor} border cursor-pointer ${width?width:''} ${txtColor} hover:${txtHover} flex items-center justify-center`" v-if="customed" >
            <p :class="` py-3 text-xs`">{{title}}</p>
        </div>
        <div :class="` rounded-full m-3 ${color} hover:${hoverColor} cursor-pointer ${width?width:''} ${txtColor} hover:${txtHover} flex items-center justify-center`" v-else >
            <p :class="` py-3 text-xs`">{{title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppButton',
    props: ['title', 'color', 'hoverColor', 'txtColor', 'txtHover', 'customed', 'width' ]
}
</script>

<style>
   
</style>