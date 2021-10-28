<template>
    <div class="relative flex flex-col items-center justify-center lg:py-32 py-10">
       <Title title="Testimonials" lineColor="#9FB0E483" class="mb-24" :lineWidth="180" />
       <div class="flex w-full items-center justify-around lg:px-20 px-2">
            <VueSlickCarousel :arrows="true" :dots="true">
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

export default {
    name: 'Testimonial',
    components: {
        Title,
        TestimonialBox,
        VueSlickCarousel
    }
}
</script>

<style scoped>
    
</style>