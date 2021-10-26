<template>
    <div>
        <Title title="Our Latest Articles" lineColor="#CFD7F1" :lineWidth="600"/>
        <div class="article_background relative">
            <div class="absolute -top-14 flex items-center justify-around w-full flex-wrap px-9">
                <article-card />
                <article-card />
                <article-card />
            </div>
            <div class="absolute bottom-14 left-1/2 transform -translate-x-2/4">
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
    .article_background{
        background-image: url('~/assets/img/home/articlebg.png');
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 35rem;
        width: 100%;
        margin-top: 10rem;
    }
</style>