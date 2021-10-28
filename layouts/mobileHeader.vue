<template>
    <header class="fixed z-50 top-0 h-16 bg-white w-full flex items-center justify-between px-4">
        <img src="~/assets/img/header/logo.png" width="100" alt="logo">
        <div class="flex items-center justify-center pt-2 pl-2">
            <button :class="`hamburger hamburger--slider-r`" type="button">
            <!-- <button :class="`hamburger hamburger--slider-r ${isMenuOpened&& 'is-active'}`" type="button" @click="onOpenMenu"> -->
                <span class="hamburger-box">
                <span class="hamburger-inner"></span>
                </span>
            </button> 
        </div>
    </header>
</template>

<script>
export default {
    name: 'MobileHeader'
}
</script>

<style scoped>

</style>