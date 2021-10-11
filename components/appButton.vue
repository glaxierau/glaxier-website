<template>
    <div :class="` rounded-full m-3 ${color} hover:${hoverColor}`" >
        <p :class="`px-${px} py-3 ${txtColor} hover:${txtHover} text-xs`">{{title}}</p>
    </div>
</template>

<script>
export default {
    name: 'AppButton',
    props: ['title', 'px', 'color', 'hoverColor', 'txtColor', 'txtHover' ]
}
</script>

<style>
   
</style>