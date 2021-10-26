<template>
    <div class="w-lg h-lg bg-white shadow-sm m-4">
        <!-- image -->
        <div class="article_image" :style="`background-image:url(${require('~/assets/img/images/article.jpg')}) `" />
        <!-- meta -->
        <p class="p-4 text-black-light">02 Sep 2021</p>
        <!-- title -->
        <p class="p-4 text-red font-bold ">Lorem ipsum dolor sit amet, consetetur sadipscing.</p>
    </div>
</template>

<script>

export default {
    name: 'ArticleCard',
}
</script>

<style scoped>
    .article_image {
        height: 18rem;
        width: 100%;
        background-size: cover;
        background-position: center;
    }
</style>