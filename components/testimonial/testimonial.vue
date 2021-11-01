<template>
    <div>
        <div class="relative flex flex-col items-center justify-center lg:py-32 py-5">
        <Title title="Testimonials" lineColor="#9FB0E483" class="lg:mb-24 mb-10" :lineWidth="180" />
            <div class="lg:flex w-full items-center justify-around lg:px-20 px-2 hidden">
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox />
            </div>
        </div>
        <div class="w-full lg:hidden px-10">
            <VueSlickCarousel v-bind="settings" :arrows="true">
                <TestimonialBox />
                <TestimonialBox />
                <TestimonialBox /> 
            </VueSlickCarousel>  
        </div>
    </div>
</template>

<script>
import Title from '../title/title.vue'
import TestimonialBox from './testimonialBox.vue'
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'


export default {
    name: 'Testimonial',
    components: {
        Title,
        TestimonialBox,
        VueSlickCarousel
    },
    data(){
        return {
            settings: {
                'arrow': true,
                dotsClass: "slick-dots custom-dot-class",
                edgeFriction: 0.35,
                infinite: false,
                speed: 500,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    }
}
</script>

<style scoped>
    
</style>