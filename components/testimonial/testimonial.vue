<template>
    <div class="h-screen flex flex-col items-center justify-center">
       <Title title="Testimonials" lineColor="#9FB0E483" class="mb-24" />
       <div class="flex items-center justify-around mx-10 flex-wrap">
            <testimonial-box />
            <testimonial-box />
            <testimonial-box />
       </div>
    </div>
</template>

<script>
import Title from '../title/title.vue'
import TestimonialBox from './testimonialBox.vue'
export default {
    name: 'Testimonial',
    components: {
        Title,
        TestimonialBox
    }
}
</script>

<style scoped>
    
</style>