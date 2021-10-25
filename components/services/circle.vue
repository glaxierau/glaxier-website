<template>
    <div class="absolute flex items-center justify-center w-56 h-56 rounded-full hover:border-2">
        <div class="w-48 h-48 rounded-full bg-white bg-opacity-95 hover:bg-red flex items-center justify-center px-10 shadow-around hover:shadow-none text-red hover:text-white transition duration-200 ease-in-out">
            <h2 class="text-xl text-center font-bold">{{title}}</h2>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AppCircle',
    props:['title' ]
}
</script>

<style>

</style>