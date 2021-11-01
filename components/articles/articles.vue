<template>
    <div class="relative lg:py-0 pt-10 h-full">
        <Title title="Our Latest Articles" lineColor="#CFD7F1" :lineWidth="600" class="pb-40"/>
        <!-- <img src="~/assets/img/home/articlebg.png" alt="article" class="bg_image"> -->
        <div class="bg_artboard relative py-10">
            <div class="relative -top-32 flex items-center justify-around lg:flex-row md:flex-row flex-col w-full lg:px-14 px-2">
                <article-card />
                <article-card />
                <article-card />
            </div>
            <div class="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <AppButton title="READ MORE" px="5" width="w-56" color="bg-white" hoverColor="bg-red" txtColor="text-blue-dark" txtHover="text-white" />
            </div>
        </div>
    </div>
</template>

<script>
import ArticleCard from '../articles/articleCard.vue'
import AppButton from '../button/appButton.vue'
import Title from '../title/title.vue'
export default {
    name: 'Articles',
    components: {
        ArticleCard,
        Title,
        AppButton
    }
}
</script>

<style scoped>
    .bg_image{
        width: 100vw;
        height: 500px;
        object-fit: cover;
    }
    .bg_artboard{
        background-image: url('~/assets/img/home/articlebg.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: auto;
        /* height: 500px; */
    }
    @media screen and (max-width: 720px) {
        .bg_image {
            height: 1000px;
        }
    }
</style>