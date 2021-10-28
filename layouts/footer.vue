<template>
    <div class="bg-red px-24 -m-1">
        <div class="flex justify-center h-80 w-full pt-10 pb-5">
            <div class="w-1/3 h-full">
                <!-- logo -->
                <img src="~/assets/img/footer/logo.png" alt="logo" width="120px">
                <!-- location -->
                <FooterLink :src="require('~/assets/img/footer/location.svg')" alt="location" :width="true" content="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy" />
                <!-- phone -->
                <FooterLink :src="require('~/assets/img/footer/phone.svg')" href="tel:+61424 555 959" alt="phone" content="+61424 555 959" />
                <!-- email -->
                <FooterLink :src="require('~/assets/img/footer/mail.svg')" href="mailto:tan@glaxier.com.au" alt="mail" content="tan@glaxier.com.au" />
            </div>
            <div class="flex items-start justify-start w-1/3 h-full pt-5">
                <!-- quick links -->
                <div class="flex flex-col w-1/3">
                    <h4 class="text-sm text-white">Quick links</h4>
                    <br>
                    <a href="/#home">Home</a>
                    <a href="/#about">About us</a>
                    <a href="/#blog">Blog</a>
                    <a href="/#contact">Contact us</a>
                </div>
                <!-- services -->
                <div class="flex flex-col w-1/2">
                    <h4 class="text-sm text-white">Services</h4>
                    <br>
                    <a href="">Digital Advertising</a>
                    <a href="">Social Media Management</a>
                    <a href="">Graphic Design</a>
                    <a href="">Website Development</a>
                </div>
            </div>
            <div class="w-1/3 h-full pt-5">
                <!-- follow us  -->
                    <h4 class="text-base text-white">Follow us</h4>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</p>
                <!-- input -->
                    <div class="flex items-center justify-between w-full bg-white rounded-full p-6 h-12 mt-5">
                        <input type="text" placeholder="Enter your email" class="w-11/12">
                        <img class="cursor-pointer" src="~/assets/img/footer/arrow.svg" alt="right arrow">
                    </div>
                <!-- brand icons -->
                    <div class="flex w-full justify-end my-5">
                        <a href=""><img src="~/assets/img/footer/facebook.svg" class="px-5" alt="facebook"></a>
                        <a href=""><img src="~/assets/img/footer/linkedin.svg" class="px-5" alt="linkedin"></a>
                        <a href=""><img src="~/assets/img/footer/instagram.svg" class="pl-4" alt="instagram"></a>
                    </div>
                
            </div>
        </div>
        <!-- footer meta -->
        <div class="flex items-center justify-between py-4 border-t">
            <p>Privacy Policy | Terms of Use</p>
            <p>Copyright © All rights reserved | Glaxier</p>
        </div>
    </div>
</template>

<script>
import FooterLink from '../components/layouts/footerlink.vue'
export default {
    name: 'Footer',
    components: {
        FooterLink
    }
}
</script>

<style scoped>

    p, a {
        @apply text-xs my-3 text-white font-thin
    }
    input, input::placeholder {
        font-size: 0.75rem;
        color: #C7C7C7;
        outline: none;
    }
</style>